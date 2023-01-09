import { JourDTO } from "../DTO/jour.dto";
import { PlanningDTO, PlanningFullDTO } from "../DTO/planning.dto";
import { planningId } from "../types/planning";

export class PlanningMapper {
    static mapToDto(Planning: planningId | null): PlanningDTO | null {
        if (Planning === null) return null;
        const dto: PlanningDTO = {
            nom_planning: Planning.nom_planning,
            date_debut_planning: Planning.date_debut_planning,
            duree_validite_calendrier: Planning.duree_validite_calendrier,
            activiteId: Planning.activiteId
        }

        return dto;
    }

    static mapToFullDto(Planning: any): PlanningFullDTO | null {
        if (Planning === null) return null;
        const dto: PlanningFullDTO = {
            nom_planning: Planning.nom_planning,
            date_debut_planning: Planning.date_debut_planning,
            duree_validite_calendrier: Planning.duree_validite_calendrier,
            activiteId: Planning.activiteId,
            Jours: Planning.jours.map((Jour: JourDTO) => {
                const objet = {
                    jour: Jour.jour,
                    heure_debut_journee: Jour.heure_debut_journee,
                    heure_fin_journee: Jour.heure_fin_journee,
                    duree_crenaux: Jour.duree_crenaux
                }
                return objet
            })
        }

        return dto;
    }
}