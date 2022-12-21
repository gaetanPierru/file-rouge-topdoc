import { RendezVousDTO } from "../DTO/rendezVous.dto";
import { rendezVousId } from "../types/rendezVous";

export class RendezVousMapper {
    static mapToDto(RendezVous: rendezVousId | null): RendezVousDTO | null {
        if (RendezVous === null) return null;
        const dto : RendezVousDTO = {
            planningId: RendezVous.planningId,
            utilisateurId: RendezVous.utilisateurId,
            date_rendez_vous: RendezVous.date_rendez_vous,
            duree_rendez_vous: RendezVous.duree_rendez_vous
        }

        return dto;
    }
}