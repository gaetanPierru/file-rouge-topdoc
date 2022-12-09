export interface rendezVousTypes {
    planningId: number,
    utilisateurId: number,
    date_rendez_vous: Date,
    duree_rendez_vous: number
  }
  
  export interface rendezVousId extends rendezVousTypes {
  
    id: number;
  
  }