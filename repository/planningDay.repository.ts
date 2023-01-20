import { IRepositoryPlanning } from "./core/repository.interface";
import { PlanningFullDTO } from "../DTO/planning.dto";
import { Conge, Jour, Planning, RendezVous, jourPlanning } from "../database/connect";
import { PlanningMapper } from "../mapper/planning.mapper";
import { Op } from "sequelize";
import { sequelize } from "../database/acces";
import { jourTypes } from "../types/jour";

export class PlanningDayRepository implements IRepositoryPlanning<PlanningFullDTO> {
    async findById(id: number): Promise<any | null> {
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
        })

        const rdv: any = await RendezVous.findAll({
            where: {
                planningId: id,
                date_rendez_vous: { [Op.gte]: new Date()}
            }
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