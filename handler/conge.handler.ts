import { Request, Response } from "express";
import { CongeDTO } from "../DTO/conge.dto";
import { IService } from "../services/core/service.interface";

export class CongeHandler {

    private CongeService: IService<CongeDTO>;

    constructor(service: IService<CongeDTO>) {
        this.CongeService = service;
    }

    getCongeId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.CongeService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getConges = async (req: Request, res: Response) => {
        try {
            const result = await this.CongeService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postConge = async (req: Request, res:Response) => {
        try {
            const result = await this.CongeService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteConge = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.CongeService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateConge = async (req:Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.CongeService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}