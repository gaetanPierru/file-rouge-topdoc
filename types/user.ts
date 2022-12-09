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

// A VIRER
export interface User {
  username: string;
  password: string;
}

declare global {
  namespace Express {
    interface Request {
      headers?: Headers;
      body?: Body;
      user?: User;
    }
  }
}
