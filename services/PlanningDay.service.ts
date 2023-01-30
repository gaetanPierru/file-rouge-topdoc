import { PlanningFullDTO } from "../DTO/planning.dto";
import { IRepository, IRepositoryPlanning } from "../repository/core/repository.interface";
import { rendezVousId } from "../types/rendezVous";
import { IServicePlanning } from "./core/service.interface";

function jourDeLaSemaine(idjour: number) {
    const jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    return jour[idjour - 1];
}

function creationXDate(nbDate: number) {
    const today = new Date();
    let dates: any = [];
    for (let i = 0; i < nbDate; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    return dates
}

function recupHeureParJour(jours: any) {
    return jours.map((jour: any) => {
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
}

function associationJourPlanning (dates: Date[], planningBrut: any, planningjour: any){
    try {
        return dates.map((date: Date) => {
            const a = date.toLocaleDateString("fr-FR", {
                weekday: "long",
                month: "long",
                day: "numeric"
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
                    console.log('rdv date',rdv.date_rendez_vous.toLocaleDateString(), ' date ', date.toLocaleDateString());
                    
                    if (rdv.date_rendez_vous.toLocaleDateString() == date.toLocaleDateString()) {
                        return rdv
                    } 
                }).filter((rdv: rendezVousId |undefined) => rdv !== undefined)
    
                console.log("date ", a, "rdv", rdvs);
                
    
                let crenaux: any
    
                crenaux = planningjour.find((jour: any) => jour.name == a.split(' ')[0])
    
                let newCrenauxTab = [];
    
                for (let i = 0; i < crenaux.crenaux.length - 1; i++) {
                    let rdv: rendezVousId = rdvs? rdvs.find((rdv: any) => rdv.date_rendez_vous?.toLocaleTimeString() == crenaux.crenaux[i]) : false
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
        
    } catch (error) {
        console.log(error);
        
    }

}

export class PlanningDayService implements IServicePlanning<PlanningFullDTO>{
    private PlanningRepository: IRepositoryPlanning<PlanningFullDTO>;

    constructor(_PlanningRepository: IRepositoryPlanning<PlanningFullDTO>) {
        this.PlanningRepository =_PlanningRepository;
    }

    async findById(id: number): Promise<PlanningFullDTO | null> {

       
        //TODO FAIRE UN AWAITALL avec 3 requetes

        return this.PlanningRepository.findById(id).then((planningBrut: any) => {
            if(planningBrut === null) return null;

            let planningjour: any = {}

            planningjour = recupHeureParJour(planningBrut.planning.Jours)
       
            const dates = creationXDate(20)


            const planningDuJour = associationJourPlanning(dates, planningBrut, planningjour)
            

            // TODO BIEN FAIRE LE DTO ET LE MAPPER
            let planningFinal = {
                name: planningBrut.planning.nom_planning,
                days: planningDuJour
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