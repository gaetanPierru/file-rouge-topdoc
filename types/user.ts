export interface userTypes {
  email: string;
  telephone: string;
  mot_de_passe: string;
  localisationId: number;
  prenom: string;
  nom: string;
  genre: string;
  date_de_naissance: Date;
}


export interface userId extends userTypes {

  id: number;

}
