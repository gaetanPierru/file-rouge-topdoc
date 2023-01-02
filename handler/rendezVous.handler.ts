import { Request, Response } from "express";
import { RendezVousService } from "../services/rendezVous.service";
import { RendezVousRepository } from "../repository/rendezVous.repository";
import { RendezVousDTO } from "../DTO/rendezVous.dto";
import { IService } from "../services/core/service.interface";

export class RendezVousHandler {

    private rdvService: IService<RendezVousDTO>;

    constructor(service: IService<RendezVousDTO>) {
        this.rdvService = service;
    }

    getRendezVousId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.rdvService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getRendezVous = async (req: Request, res: Response) => {
        try {
            const result = await this.rdvService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postRendezVous = async (req: Request, res: Response) => {
        try {
            const result = await this.rdvService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteRendezVous = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.rdvService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateRendezVous = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.rdvService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}