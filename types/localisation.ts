export interface localisationTypes {
  numero_de_rue: number
  address: string;
  code_postal: number;
  ville: string
}

export interface localisationId extends localisationTypes {

  id: number;

}