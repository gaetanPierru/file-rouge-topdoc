import { Request, Response } from "express";
import { BannisService } from "../services/bannis.service";
import { BannisRepository } from "../repository/bannis.repository";
import { BannisDTO } from "../DTO/bannis.dto";
import { IService } from "../services/core/service.interface";

export class BannisHandler {

    private bannisService: IService<BannisDTO>;

    constructor(service: IService<BannisDTO>) {
        this.bannisService = service;
    }

    getBannisId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.bannisService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getBanniss = async (req: Request, res: Response) => {
        try {
            const result = await this.bannisService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postBannis = async (req: Request, res: Response) => {
        try {
            const result = await this.bannisService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteBannis = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.bannisService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateBannis = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.bannisService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
