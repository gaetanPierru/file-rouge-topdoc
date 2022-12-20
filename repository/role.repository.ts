import { IRepository } from "./core/repository.interface";
import { roleDTO } from "../DTO/role.dto";
import { Role } from "../database/connect";
import { roleId, roleTypes } from "../types/role";
import { RoleMapper } from "../mapper/role.mapper";

export class RoleRepository implements IRepository<roleDTO> {
    findById(id: number): Promise<roleDTO | null> {
        return Role.findByPk(id).then((role: roleId | null) => RoleMapper.mapToDto(role))
    }
    findAll(): Promise<roleDTO[]> {
        return Role.findAll().then((roles: roleId[]) => roles.map((role: roleId) => RoleMapper.mapToDto(role)))
    }
    create(t: roleTypes): Promise<roleDTO> {
        return Role.create(t).then((user: roleId) => RoleMapper.mapToDto(user))
    }
    delete(id: number): Promise<boolean> {
        return Role.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: roleDTO, id: number): Promise<boolean> {
        return Role.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}