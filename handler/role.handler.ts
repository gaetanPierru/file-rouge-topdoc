import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import bcrypt from "bcrypt"
import { RoleRepository } from "../repository/role.repository";

const roleService = new RoleService(new RoleRepository);

async function getRoleId(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
        if(Number.isInteger(id)){
            const result = await roleService.findById(id);
            if(result === null) return res.status(404).send()
            res.status(200).json(result)
        }

    } catch(err) {
        res.status(500).json(err)
    }
}

async function getRoles(req: Request, res: Response) {
    try {
        const result = await roleService.findAll();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function postRole(req: Request, res: Response) {
    req.body.mot_de_passe =  await bcrypt.hash(req.body.mot_de_passe, 10)
    try {
        const result = await roleService.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await roleService.delete(id);
        res.status(200).json(result? "supprimé": "fail")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const result = await roleService.update(req.body, id);
        res.status(200).json( result? "mis a jour": "fail");
    } catch (err) {
        res.status(500).json(err)
    }
}
const handler = {getRoleId, getRoles, postRole, deleteRole, updateRole};

export default handler;