import { activiteDTO } from "../DTO/activite.dto";
import { activityId } from "../types/activity";

export class ActiviteMapper {
    static mapToDto(activite: activityId | null): activiteDTO | null {
        if (activite === null) return null;
        const dto : activiteDTO = {
            fonction: activite.fonction,
            description: activite.description,
            type: activite.type,
            estActif: activite.estActif
        }

        return dto;
    }
}