export interface activiteDTO {
    fonction: string;
    description: string;
    type: string;
    estActif: boolean;
}

export interface activiteFullDTO extends activiteDTO {
    numero_de_rue: number;
    address: string;
    code_postal: number;
    ville: string;
}