import { jourTypes } from "../types/jour";
import { rendezVousId } from "../types/rendezVous";
import { JourDTO } from "./jour.dto";

export interface PlanningDTO {
  nom_planning: string;
  date_debut_planning: Date;
  duree_validite_calendrier: number;
  activiteId: number;
}

export interface PlanningFullDTO extends PlanningDTO {
  Jours: JourDTO[]
}

export interface PlanningComplet {
  name: any;
  days: {
        jour: string;
        conge: boolean;
        crenaux: ({
          heureDebut: string;
          heureFin: string;
          rdv: rendezVousId;
      } | {
          heureDebut: string;
          heureFin: string;
          rdv: boolean;
      })[]
  }[] | undefined;
}
