import { IRepository } from "./core/repository.interface";
import { Activity } from "../database/connect";
import { activiteDTO } from "../DTO/activite.dto";
import { activityId } from "../types/activity";
import { ActiviteMapper } from "../mapper/activite.mapper";

export class ActiviteRepository implements IRepository<activiteDTO> {
    findById(id: number): Promise<activiteDTO | null> {
        return Activity.findByPk(id).then((Localisation: activityId | null) => ActiviteMapper.mapToDto(Localisation))
    }
    findAll(): Promise<activiteDTO[]> {
        return Activity.findAll().then((Localisations: activityId[]) => Localisations.map((Localisation: activityId) => ActiviteMapper.mapToDto(Localisation)))
    }
    create(t: activiteDTO): Promise<activiteDTO> {
        return Activity.create(t).then((user: activityId) => ActiviteMapper.mapToDto(user))
    }
    delete(id: number): Promise<boolean> {
        return Activity.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: activiteDTO, id: number): Promise<boolean> {
        return Activity.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}