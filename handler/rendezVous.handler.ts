import { Request, Response } from "express";
import { RendezVousService } from "../services/rendezVous.service";
import { RendezVousRepository } from "../repository/rendezVous.repository";

const _RendezVousService = new RendezVousService(new RendezVousRepository);

async function getRendezVousId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await _RendezVousService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getRendezVous(req: Request, res: Response) {
    try {
        const result = await _RendezVousService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postRendezVous(req: Request, res: Response) {
    try {
        const result = await _RendezVousService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteRendezVous(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _RendezVousService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateRendezVous(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _RendezVousService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getRendezVous, getRendezVousId, postRendezVous, deleteRendezVous, updateRendezVous};

export default handler;