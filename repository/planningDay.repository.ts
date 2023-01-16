import { IRepository, IRepositoryPlanning } from "./core/repository.interface";
import { PlanningDTO, PlanningFullDTO } from "../DTO/planning.dto";
import { Conge, Jour, Planning, RendezVous } from "../database/connect";
import { PlanningMapper } from "../mapper/planning.mapper";
import { planningId } from "../types/planning";
import { now } from "sequelize/types/utils";
import { Op } from "sequelize";

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
    create(t: Omit<PlanningFullDTO, "id">): Promise<PlanningFullDTO | null> {
        throw new Error("Method not implemented.");
    }
    update(t: Partial<PlanningFullDTO>, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }


}