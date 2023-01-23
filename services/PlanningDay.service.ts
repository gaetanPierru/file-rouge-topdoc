import { PlanningComplet, PlanningFullDTO } from "../DTO/planning.dto";
import { IRepository, IRepositoryPlanning } from "../repository/core/repository.interface";
import { planningTypes } from "../types/planning";
import { rendezVousId } from "../types/rendezVous";
import { IServicePlanning } from "./core/service.interface";

function jourDeLaSemaine(idjour: number) {
    const jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    return jour[idjour - 1];
}

export class PlanningDayService implements IServicePlanning<PlanningFullDTO>{
    private PlanningRepository: IRepositoryPlanning<PlanningFullDTO>;

    constructor(_PlanningRepository: IRepositoryPlanning<PlanningFullDTO>) {
        this.PlanningRepository =_PlanningRepository;
    }

    async findById(id: number): Promise<PlanningFullDTO | null> {

        //TODO METTRE DANS DIFFERENTES FONCTIONS

        return this.PlanningRepository.findById(id).then((planningBrut: any) => {
            if(planningBrut === null) return null;


            let planning: any = {}

            planning.name = planningBrut.planning.nom_planning
            planning.dateDebut = planningBrut.planning.date_debut_planning
            planning.durée = planningBrut.planning.duree_validite_calendrier

            planning.jour = planningBrut.planning.Jours.map((jour: any) => {
                const dayName = jourDeLaSemaine(jour.jour);

                const minutejour = (jour.heure_fin_journee.getTime() - jour.heure_debut_journee.getTime()) / (1000 * 60);
                const nbCrenaux = Math.floor(minutejour / jour.duree_crenaux);

                let crenauxTab: any[] = [];

                for (let i = 0; i < nbCrenaux; i++) {
                    crenauxTab.push(new Date(jour.heure_debut_journee.getTime() + (jour.duree_crenaux * 60 * 1000) * i).toLocaleTimeString())
                }
                crenauxTab.push(new Date(jour.heure_fin_journee.getTime()).toLocaleTimeString())

                return { name: dayName, crenaux: crenauxTab }
            })

            const today = new Date();
            let dates: any = [];
            for (let i = 0; i < 20; i++) {
                const date = new Date(today);
                date.setDate(date.getDate() + i);
                dates.push(date);
            }

            let test = dates.map((date: Date) => {
                const a = date.toLocaleDateString("fr-FR", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                })
                let congee = planningBrut.conge.map((conge: any) => {
                    if (new Date(conge.date_fin) >= date && new Date(conge.date_debut) <= date) {
                        return true
                    } else {
                        return false
                    }
                })
                
                if (!congee[0]) {
                    let rdvs = planningBrut.rdv.map((rdv: rendezVousId) => {

                        if (rdv.date_rendez_vous.toLocaleDateString() == date.toLocaleDateString()) {
                            return rdv
                        } else {
                            return false
                        }
                    })

                    let crenaux: any

                    crenaux = planning.jour.find((jour: any) => jour.name == a.split(' ')[0])

                    let newCrenauxTab = [];

                    for (let i = 0; i < crenaux.crenaux.length - 1; i++) {
                        let rdv: rendezVousId = rdvs[0] ? rdvs.find((rdv: any) => rdv.date_rendez_vous.toLocaleTimeString() == crenaux.crenaux[i]) : false
                        if (i + 1 <= crenaux.crenaux.length) {
                            if (rdv) {
                                newCrenauxTab.push({ heureDebut: crenaux.crenaux[i], heureFin: crenaux.crenaux[i + 1], rdv: rdv })
                            } else {
                                newCrenauxTab.push({ heureDebut: crenaux.crenaux[i], heureFin: crenaux.crenaux[i + 1], rdv: false })
                            }
                        }
                    }
                    const crenauxday = { jour: a, crenaux: newCrenauxTab, conge: false }

                    return crenauxday

                } 

                const day = { jour: a, conge: true}

                return day
            })

            const verif = 0
            console.log('jour', test[verif].jour, 'crenaux', test[verif].crenaux, 'conge', test[verif].conge);

            // TODO BIEN FAIRE LE DTO ET LE MAPPER
            let planningFinal = {
                name: planningBrut.planning.nom_planning,
                days: test
            }

            return planningFinal as any
        })
    }

    async create(Planning: any): Promise<PlanningFullDTO | null> {
        return this.PlanningRepository.create(Planning).then(PlanningDTO => {
            if(PlanningDTO === null) return null;
            return PlanningDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.PlanningRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(Planning: PlanningFullDTO, id: number): Promise<number |boolean> {
        return this.PlanningRepository.update(Planning,id).then(good => good)
    }
}