import { userDTO } from "./user.dto"

export interface RendezVousDTO {
    planningId: number,
    utilisateurId: number,
    date_rendez_vous: Date,
    duree_rendez_vous: number
  }
  
  export interface RendezVousUserDTO extends RendezVousDTO {
    User: userDTO
  }