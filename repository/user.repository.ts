import { userDTO } from "../DTO/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";
import { userId, userTypes } from "../types/user";
import { User } from "../models/users";

export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: User | null) => UserMapper.mapToDto(user))
    }

    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: User[]) => users.map((user: User) => UserMapper.mapToDto(user)))
    }
    async create(t: Omit<User, 'id'>): Promise<userDTO> {
        return User.create(t).then((user: User) => UserMapper.mapToDto(user))
    }
    async delete(id: number): Promise<number |boolean> {
        return User.destroy({where: {id: id}}).then((good: number |boolean ) => good)
    }
    async update(t: User, id: number): Promise<number |boolean> {
        return User.update(t, {where: {id: id}}).then(((good: (number |boolean)[]) => good[0]))
    }

}