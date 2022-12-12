import { planningTypes } from "../types/planning";

export const plannings: planningTypes[] = [
    {
        duree_validite_calendrier: 6,
        date_debut_planning: new Date(),
        nom_planning: "courant",
        activiteId: 1
    },
    {
        duree_validite_calendrier: 3,
        date_debut_planning: new Date(),
        nom_planning: "vacacion",
        activiteId: 1
    }
];