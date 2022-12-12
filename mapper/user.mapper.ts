import { userDTO } from "../DTO/user.dto";
import { userId } from "../types/user";

export class UserMapper {
    static mapToDto(user: userId | null): userDTO | null {
        if (user === null) return null;
        const dto : userDTO = {
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