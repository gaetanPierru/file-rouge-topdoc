import { Request, Response } from "express";
import { ActiviteService } from "../services/Activite.service";
import { ActiviteRepository } from "../repository/activite.repository";

const activiteService = new ActiviteService(new ActiviteRepository);

async function getActiviteId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await activiteService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getActivites(req: Request, res: Response) {
    try {
        const result = await activiteService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postActivite(req: Request, res: Response) {
    try {
        const result = await activiteService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteActivite(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await activiteService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateActivite(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await activiteService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getActivites, getActiviteId, postActivite, deleteActivite, updateActivite};

export default handler;