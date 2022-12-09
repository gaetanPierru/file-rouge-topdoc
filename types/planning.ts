export interface planningTypes {
    nom_planning: string;
    date_debut_planning: Date;
    duree_validite_calendrier: number;
    activiteId: number;
  }
  
  export interface planningId extends planningTypes {
  
    id: number;
  
  }