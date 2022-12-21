import { JourDTO } from "../DTO/jour.dto";
import { jourId } from "../types/jour";

export class JourMapper {
    static mapToDto(Jour: jourId | null): JourDTO | null {
        if (Jour === null) return null;
        const dto : JourDTO = {
            jour: Jour.jour,
            heure_debut_journee: Jour.heure_debut_journee,
            heure_fin_journee: Jour.heure_fin_journee,
            duree_crenaux: Jour.duree_crenaux
        }

        return dto;
    }
}