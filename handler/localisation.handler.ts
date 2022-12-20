import { Request, Response } from "express";
import { LocalisationRepository } from "../repository/localisation.repository";
import { LocalisationService } from "../services/localisation.service";

const localisationService = new LocalisationService(new LocalisationRepository);

async function getLocalisationId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await localisationService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getLocalisations(req: Request, res: Response) {
    try {
        const result = await localisationService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postLocalisation(req: Request, res: Response) {
    try {
        const result = await localisationService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteLocalisation(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await localisationService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateLocalisation(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await localisationService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getLocalisationId, getLocalisations, postLocalisation, deleteLocalisation, updateLocalisation};

export default handler;