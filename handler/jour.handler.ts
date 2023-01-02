import { Request, Response } from "express";
import { JourDTO } from "../DTO/jour.dto";
import { IService } from "../services/core/service.interface";

export class JourHandler {

    private jourService: IService<JourDTO>;

    constructor(service: IService<JourDTO>) {
        this.jourService = service;
    }

     getJourId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.jourService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

     getJours = async (req: Request, res: Response) => {
        try {
            const result = await this.jourService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

     postJour = async (req: Request, res: Response) => {
        try {
            const result = await this.jourService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

     deleteJour = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.jourService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

     updateJour = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.jourService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}