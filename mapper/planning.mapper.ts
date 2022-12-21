import { PlanningDTO } from "../DTO/planning.dto";
import { planningId } from "../types/planning";

export class PlanningMapper {
    static mapToDto(Planning: planningId | null): PlanningDTO | null {
        if (Planning === null) return null;
        const dto : PlanningDTO = {
            nom_planning: Planning.nom_planning,
            date_debut_planning: Planning.date_debut_planning,
            duree_validite_calendrier: Planning.duree_validite_calendrier,
            activiteId: Planning.activiteId
        }

        return dto;
    }
}