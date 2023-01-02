import { Request, Response } from "express";
import { localisationDTO } from "../DTO/localisation.dto";
import { IService } from "../services/core/service.interface";

export class LocalisationHandler {

    private localisationService: IService<localisationDTO>;

    constructor(service: IService<localisationDTO>) {
        this.localisationService = service;
    }

 getLocalisationId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await this.localisationService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

 getLocalisations = async (req: Request, res: Response) => {
    try {
        const result = await this.localisationService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

 postLocalisation = async(req: Request, res: Response) => {
    try {
        const result = await this.localisationService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

 deleteLocalisation = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await this.localisationService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

 updateLocalisation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await this.localisationService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
}