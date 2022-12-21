import { Request, Response } from "express";
import { BannisService } from "../services/bannis.service";
import { BannisRepository } from "../repository/bannis.repository";

const bannisService = new BannisService(new BannisRepository);

async function getBannisId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await bannisService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getBanniss(req: Request, res: Response) {
    try {
        const result = await bannisService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postBannis(req: Request, res: Response) {
    try {
        const result = await bannisService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteBannis(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await bannisService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateBannis(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await bannisService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getBanniss, getBannisId, postBannis, deleteBannis, updateBannis};

export default handler;