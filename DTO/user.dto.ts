export interface userDTO {
    nom: string,
    prenom: string,
    genre: string,
    date_de_naissance: Date | undefined,
    email: string,
    telephone: string
}

export interface userFullDTO extends userDTO {
    localisation : {
        numero_de_rue: number;
        address: string;
        code_postal: number;
        ville: string;
    }
}