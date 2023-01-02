import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { userDTO } from "../DTO/user.dto";
import { IService } from "../services/core/service.interface";


export class UserHandler {

    private userService: IService<userDTO>;

    constructor(service: IService<userDTO>) {
        this.userService = service;
    }

    getUserId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.userService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getUsers = async (req: Request, res: Response) => {
        try {
            const result = await this.userService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postUser = async (req: Request, res: Response) => {
        req.body.mot_de_passe = await bcrypt.hash(req.body.mot_de_passe, 10)
        try {
            const result = await this.userService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.userService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.userService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}