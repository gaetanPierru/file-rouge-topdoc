import { Request, Response } from "express";
import { PlanningFullDTO } from "../DTO/planning.dto";
import { IServicePlanning } from "../services/core/service.interface";

export class PlanningDayHandler {

    private planningDayService: IServicePlanning<PlanningFullDTO>;

    constructor(service: IServicePlanning<PlanningFullDTO>) {
        this.planningDayService = service;
    }

    getPlanningId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            if (Number.isInteger(id)) {


                const result: any = await this.planningDayService.findById(id);
                if (result === null) return res.status(404).send()
                
                return res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }


    postPlanning = async (req: Request, res: Response) => {
        try {
            const result = await this.planningDayService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deletePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningDayService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updatePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningDayService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}