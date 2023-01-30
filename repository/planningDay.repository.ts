import { IRepositoryPlanning } from "./core/repository.interface";
import { PlanningFullDTO } from "../DTO/planning.dto";
import User, { Conge, Jour, Planning, RendezVous } from "../database/connect";
import { PlanningMapper } from "../mapper/planning.mapper";
import { Op } from "sequelize";
import { CongeMapper } from "../mapper/conge.mapper";

export class PlanningDayRepository implements IRepositoryPlanning<PlanningFullDTO> {
    async findById(id: number): Promise<any | null> {

        //TODO FAIRE PLUSIEURS REQUETE DANS LE SERVICE AU LIEUX DE FAIRE 3 AWAIT avec un awaitall

        const planningJour: any = await Planning.findByPk(id, {
            include: [
                {
                    model: Jour,
                    required: true,
                },
            ],

        }).then((planning: any) => PlanningMapper.mapToFullDto(planning))

        const conge: any = await Conge.findAll({
            where: {
                activiteId: planningJour.activiteId,
                date_fin: { [Op.gte]: new Date() }
            }
        }).then((conges: any) =>  conges.map((conge: any) => CongeMapper.mapToDto(conge)) )

        const rdv: any = await RendezVous.findAll({
            where: {
                planningId: id,
                date_rendez_vous: { [Op.gte]: new Date()}
            }, include: [
                {
                    model: User,
                    require: true
                }
            ]
        })

        return { planning: planningJour, conge: conge, rdv: rdv }
    }

    async create(t: any): Promise<PlanningFullDTO | null> {

        try {
            
            const newPlanning = await Planning.create({
                ...t.planning, jours: t.Jours
            }, {
                include: 'jours'
            })

            return newPlanning
        } catch (error) {
            console.log(error);
            
            return error as any
        }
        

    }
    update(t: Partial<PlanningFullDTO>, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }


}