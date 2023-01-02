import { userDTO, userFullDTO } from "../DTO/user.dto";
import { User } from "../models/users";
import { userId } from "../types/user";

export class UserLocalisationMapper {
    static mapToDto(user: userFullDTO |null): userFullDTO {
        if (user === null){
            return null as any;
        } 
        const dto : userFullDTO = {
            nom: user.nom,
            prenom: user.prenom,
            genre: user.genre,
            date_de_naissance: user.date_de_naissance,
            email: user.email,
            telephone: user.telephone,
            localisation: {
                numero_de_rue: user.localisation.numero_de_rue,
                address: user.localisation.address,
                code_postal: user.localisation.code_postal,
                ville: user.localisation.ville
            }
        }

        return dto;
    }
}