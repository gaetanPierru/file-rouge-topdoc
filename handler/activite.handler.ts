import { Request, Response } from "express";
import { IService } from "../services/core/service.interface";
import { activiteDTO } from "../DTO/activite.dto";

export class ActiviteHandler {

    private activiteService: IService<activiteDTO>;

    constructor(service: IService<activiteDTO>) {
        this.activiteService = service;
    }

    getActiviteId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.activiteService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getActivites = async (req: Request, res: Response) => {
        try {
            const result = await this.activiteService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postActivite = async (req: Request, res: Response) => {
        try {
            const result = await this.activiteService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteActivite = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.activiteService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateActivite = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.activiteService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}
