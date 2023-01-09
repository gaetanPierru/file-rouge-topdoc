import { JourDTO } from "./jour.dto";

export interface PlanningDTO {
    nom_planning: string;
    date_debut_planning: Date;
    duree_validite_calendrier: number;
    activiteId: number;
  }

  export interface PlanningFullDTO extends PlanningDTO{
    Jours : JourDTO[]
  }