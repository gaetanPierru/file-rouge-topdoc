import { Request, Response } from "express";
import { PlanningDTO } from "../DTO/planning.dto";
import { IService } from "../services/core/service.interface";

export class PlanningHandler {

    private planningService: IService<PlanningDTO>;

    constructor(service: IService<PlanningDTO>) {
        this.planningService = service;
    }

    getPlanningId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.planningService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getPlannings = async (req: Request, res: Response) => {
        try {
            const result = await this.planningService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postPlanning = async (req: Request, res: Response) => {
        try {
            const result = await this.planningService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deletePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updatePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}