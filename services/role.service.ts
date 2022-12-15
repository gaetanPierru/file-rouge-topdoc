import { roleDTO } from "../DTO/role.dto";
import { IRepository } from "../repository/core/repository.interface";
import { roleTypes } from "../types/role";

export class RoleService {
    private roleRepository: IRepository<roleDTO>;

    constructor(_userRepository: IRepository<roleDTO>) {
        this.roleRepository =_userRepository;
    }

    async findById(id: number): Promise<roleDTO | null> {
        return this.roleRepository.findById(id).then(roleDTO => {
            if(roleDTO === null) return null;
            return roleDTO
        })
    }

    async findAll(): Promise<roleDTO[] | null> {
        return this.roleRepository.findAll().then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async create(user: roleTypes): Promise<roleDTO | null> {
        return this.roleRepository.create(user).then(roleDTO => {
            if(roleDTO === null) return null;
            return roleDTO
        })
    }

    async delete(id: number): Promise<boolean> {
        return this.roleRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(user: roleTypes, id: number): Promise<boolean> {
        return this.roleRepository.update(user,id).then(good => good)
    }
}