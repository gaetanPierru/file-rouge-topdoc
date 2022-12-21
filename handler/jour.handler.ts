import { Request, Response } from "express";
import { JourService } from "../services/jour.service";
import { JourRepository } from "../repository/jour.repository";

const _JourService = new JourService(new JourRepository);

async function getJourId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await _JourService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getJours(req: Request, res: Response) {
    try {
        const result = await _JourService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postJour(req: Request, res: Response) {
    try {
        const result = await _JourService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteJour(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _JourService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateJour(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _JourService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getJours, getJourId, postJour, deleteJour, updateJour};

export default handler;