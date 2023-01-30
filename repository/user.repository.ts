import { userDTO } from "../DTO/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";
import { User } from "../models/users";

export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: any | null) => UserMapper.mapToDto(user))
    }

    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: User[]) => users.map((user: any) => UserMapper.mapToDto(user)))
    }
    async create(t: any): Promise<userDTO | null> {
        try {
            return User.create(t).then((user: any) => UserMapper.mapToDto(user))
        } catch (error) {
            return null
        }
    }
    async delete(id: number): Promise<number |boolean> {
        return User.destroy({where: {id: id}}).then((good: number |boolean ) => good)
    }
    async update(t: any, id: number): Promise<number |boolean> {
        return User.update(t, {where: {id: id}}).then(((good: (number |boolean)[]) => good[0]))
    }

}