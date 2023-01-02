import { userDTO, userFullDTO } from "../DTO/user.dto";
import { IRepository, ISpecial } from "../repository/core/repository.interface";
import { userId, userTypes } from "../types/user";

export class UserLocalisationService {
    private userRepository: ISpecial<userFullDTO>;

    constructor(_userRepository: ISpecial<userFullDTO>) {
        this.userRepository =_userRepository;
    }

    async findById(id: number): Promise<userFullDTO | null> {
        return this.userRepository.findById(id).then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async findAll(): Promise<userFullDTO[] | null> {
        return this.userRepository.findAll().then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }
}