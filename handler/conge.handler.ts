import { Request, Response } from "express";
import { CongeService } from "../services/conge.service";
import { CongeRepository } from "../repository/conge.repository";

const _CongeService = new CongeService(new CongeRepository);

async function getCongeId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await _CongeService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getConges(req: Request, res: Response) {
    try {
        const result = await _CongeService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postConge(req: Request, res: Response) {
    try {
        const result = await _CongeService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteConge(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _CongeService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateConge(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _CongeService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getConges, getCongeId, postConge, deleteConge, updateConge};

export default handler;