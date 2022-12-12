import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../services/user.service";

const userService = new UserService(new UserRepository);

async function getUserId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await userService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getUsers(req: Request, res: Response) {
    try {
        const result = await userService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postUser(req: Request, res: Response) {
    try {
        const result = await userService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getUserId, getUsers, postUser};

export default handler;