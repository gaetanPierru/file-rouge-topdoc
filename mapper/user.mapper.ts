import { userDTO } from "../DTO/user.dto";
import { User } from "../models/users";
import { userId } from "../types/user";

export class UserMapper {
    static mapToDto(user: userId |null): userDTO {
        if (user === null){
            return null as any;
        } 
        const dto : userDTO = {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            genre: user.genre,
            date_de_naissance: user.date_de_naissance,
            email: user.email,
            telephone: user.telephone
        }

        return dto;
    }
}