import { Request, Response } from "express";
import { PlanningService } from "../services/planning.service";
import { PlanningRepository } from "../repository/planning.repository";

const _PlanningService = new PlanningService(new PlanningRepository);

async function getPlanningId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await _PlanningService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getPlannings(req: Request, res: Response) {
    try {
        const result = await _PlanningService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postPlanning(req: Request, res: Response) {
    try {
        const result = await _PlanningService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deletePlanning(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _PlanningService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updatePlanning(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await _PlanningService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getPlannings, getPlanningId, postPlanning, deletePlanning, updatePlanning};

export default handler;