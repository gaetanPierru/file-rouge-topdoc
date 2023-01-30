import { activiteDTO, activiteDTOFull } from "../DTO/activite.dto";
import { activityId } from "../types/activity";

export class ActiviteMapper {
    static mapToDto(activite: activityId | null): activiteDTO | null {
        if (activite === null) return null;
        const dto: activiteDTO = {
            id: activite.id,
            fonction: activite.fonction,
            description: activite.description,
            type: activite.type,
            estActif: activite.estActif
        }

        return dto;
    }

    static mapToDtoFull(activite: activiteDTOFull | null): activiteDTOFull | null {
        if (activite === null) return null;
        const dto: activiteDTOFull = {
            id: activite.id,
            fonction: activite.fonction,
            description: activite.description,
            type: activite.type,
            estActif: activite.estActif,
            planning: {
                id: activite.planning.id,
                nom_planning: activite.planning.nom_planning,
            }
        }

        return dto;
    }
}