import { roleDTO } from "../DTO/role.dto";
import { IRepository } from "../repository/core/repository.interface";
import { roleTypes } from "../types/role";

export class RoleService {
    private roleRepository: IRepository<roleDTO>;

    constructor(_roleRepository: IRepository<roleDTO>) {
        this.roleRepository =_roleRepository;
    }

    async findById(id: number): Promise<roleDTO | null> {
        return this.roleRepository.findById(id).then(roleDTO => {
            if(roleDTO === null) return null;
            return roleDTO
        })
    }

    async findAll(): Promise<roleDTO[] | null> {
        return this.roleRepository.findAll().then(roleDTO => {
            if(roleDTO === null) return null;
            return roleDTO
        })
    }

    async create(role: roleTypes): Promise<roleDTO | null> {
        return this.roleRepository.create(role).then(roleDTO => {
            if(roleDTO === null) return null;
            return roleDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.roleRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(role: roleTypes, id: number): Promise<number |boolean> {
        return this.roleRepository.update(role,id).then(good => good)
    }
}