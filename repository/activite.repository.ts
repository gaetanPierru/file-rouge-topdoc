import { IRepository } from "./core/repository.interface";
import { Activity, Planning } from "../database/connect";
import { activiteDTO, activiteDTOFull } from "../DTO/activite.dto";
import { activityId } from "../types/activity";
import { ActiviteMapper } from "../mapper/activite.mapper";

export class ActiviteRepository implements IRepository<activiteDTO> {
    async findById(id: number): Promise<activiteDTO | null> {
        return Activity.findByPk(id, {include: [
            {
                model: Planning,
                required: true,
            },
        ]}).then((Localisation: activiteDTOFull | null) => ActiviteMapper.mapToDtoFull(Localisation))
    }
    async findAll(): Promise<activiteDTO[]> {
        return Activity.findAll({include: [
            {
                model: Planning,
                required: true,
            },
        ]}).then((Localisations: activiteDTOFull[]) => Localisations.map((Localisation) => ActiviteMapper.mapToDtoFull(Localisation)))
    }
    async create(t: activiteDTO): Promise<activiteDTO> {
        return Activity.create(t).then((user: activityId) => ActiviteMapper.mapToDto(user))
    }
    async delete(id: number): Promise<number |boolean> {
        return Activity.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: activiteDTO, id: number): Promise<number |boolean> {
        return Activity.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}