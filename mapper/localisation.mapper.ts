import { localisationDTO } from "../DTO/localisation.dto";
import { localisationId } from "../types/localisation";

export class LocalisationMapper {
    static mapToDto(localisation: localisationId | null): localisationDTO | null {
        if (localisation === null) return null;
        const dto : localisationDTO = {
            numero_de_rue: localisation.numero_de_rue,
            address: localisation.address,
            code_postal: localisation.code_postal,
            ville: localisation.ville
        }

        return dto;
    }
}