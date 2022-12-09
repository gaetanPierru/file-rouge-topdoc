export interface activityTypes {
    fonction: string;
    description: string;
    type: string;
    estActif: boolean;
    localisationId: number;

}

export interface activityId extends activityTypes {

    id: number;

}