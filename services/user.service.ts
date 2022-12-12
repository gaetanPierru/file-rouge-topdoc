import { userDTO } from "../DTO/user.dto";
import { IRepository } from "../repository/core/repository.interface";

export class UserService {
    private userRepository: IRepository<userDTO>;

    constructor(_userRepository: IRepository<userDTO>) {
        this.userRepository =_userRepository;
    }

    async findById(id: number): Promise<userDTO | null> {
        return this.userRepository.findById(id).then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async findAll(): Promise<userDTO[] | null> {
        return this.userRepository.findAll().then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }
}