import { userDTO } from "../DTO/user.dto";
import { User } from "../database/connect";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";
import { userId, userTypes } from "../types/user";

export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: userId) => UserMapper.mapToDto(user))
    }
    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: userId[]) => users.map((user: userId) => UserMapper.mapToDto(user)))
    }
    async create(t: userTypes): Promise<userDTO> {
        return User.create(t).then((user: userId) => UserMapper.mapToDto(user))
    }
    async delete(id: number): Promise<boolean> {
        return User.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: userTypes, id: number): Promise<boolean> {
        return User.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}