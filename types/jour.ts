export interface jourTypes {
    jour: number;
    heure_debut_journee: Date;
    heure_fin_journee: Date;
    duree_crenaux: number;

}

export interface activityId extends jourTypes {

    id: number;

}