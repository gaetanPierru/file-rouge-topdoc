import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../services/user.service";
import bcrypt from "bcrypt"

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
    req.body.mot_de_passe =  await bcrypt.hash(req.body.mot_de_passe, 10)
    try {
        const result = await userService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await userService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await userService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getUserId, getUsers, postUser, deleteUser, updateUser};

export default handler;