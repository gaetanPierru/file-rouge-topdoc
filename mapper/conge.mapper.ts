import { CongeDTO } from "../DTO/conge.dto";
import { congeId } from "../types/conge";

export class CongeMapper {
    static mapToDto(Conge: congeId | null): CongeDTO | null {
        if (Conge === null) return null;
        const dto : CongeDTO = {
            date_debut: Conge.date_debut,
            date_fin: Conge.date_fin,
            ActiviteId: Conge.ActiviteId
        }

        return dto;
    }
}