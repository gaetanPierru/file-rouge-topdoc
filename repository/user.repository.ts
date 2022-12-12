import { userDTO } from "../DTO/user.dto";
import { User } from "../database/connect";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";
import { userId } from "../types/user";

export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: userId) => UserMapper.mapToDto(user))
    }
    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: userId[]) => users.map((user: userId) => UserMapper.mapToDto(user)))
    }
    create(t: userDTO): Promise<userDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: userDTO): Promise<userDTO> {
        throw new Error("Method not implemented.");
    }

}