import { Request, Response } from "express";
import { IServiceToken } from "../services/core/service.interface";
import { AuthDTO } from "../DTO/auth.dto";

export class AuthHandler {

    private authHandler: IServiceToken<AuthDTO>;

    constructor(service: IServiceToken<AuthDTO>) {
        this.authHandler = service;
    }

    token = async (req: Request, res: Response) => {
        try {
            res.status(200).json('result')
        } catch (err) {

        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const result = await this.authHandler.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    loginAdmin = async (req: Request, res: Response) => {
        try {
            const result = await this.authHandler.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
