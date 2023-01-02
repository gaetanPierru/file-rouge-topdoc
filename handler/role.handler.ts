import { Request, Response } from "express";
import { roleDTO } from "../DTO/role.dto";
import { IService } from "../services/core/service.interface";

export class RoleHandler {

    private roleService: IService<roleDTO>;

    constructor(service: IService<roleDTO>) {
        this.roleService = service;
    }

    getRoleId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.roleService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getRoles = async (req: Request, res: Response) => {
        try {
            const result = await this.roleService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postRole = async (req: Request, res: Response) => {
        try {
            const result = await this.roleService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteRole = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.roleService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateRole = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.roleService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}