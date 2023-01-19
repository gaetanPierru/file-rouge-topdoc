import { Request, Response } from "express";
import { Jour } from "../database/connect";
import { PlanningFullDTO } from "../DTO/planning.dto";
import { IServicePlanning } from "../services/core/service.interface";
import { rendezVousId } from "../types/rendezVous";

function jourDeLaSemaine(idjour: number) {
    const jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    return jour[idjour - 1];
}

export class PlanningDayHandler {

    private planningDayService: IServicePlanning<PlanningFullDTO>;

    constructor(service: IServicePlanning<PlanningFullDTO>) {
        this.planningDayService = service;
    }

    getPlanningId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        // TODO MOVE TO SERVICE AND OPTIMISE IT
        try {
            if (Number.isInteger(id)) {
                const planningBrut: any = await this.planningDayService.findById(id);
                if (planningBrut === null) return res.status(404).send()
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
                        year: "numeric",
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

                return res.status(200).json(planningBrut)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }


    postPlanning = async (req: Request, res: Response) => {
        try {
            const result = await this.planningDayService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deletePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningDayService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updatePlanning = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.planningDayService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}