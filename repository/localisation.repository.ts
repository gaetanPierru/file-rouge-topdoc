import { IRepository } from "./core/repository.interface";
import { LocalisationMapper } from "../mapper/localisation.mapper";
import { localisationDTO } from "../DTO/localisation.dto";
import { localisationId } from "../types/localisation";
import { Localisation } from "../database/connect";

export class LocalisationRepository implements IRepository<localisationDTO> {
    findById(id: number): Promise<localisationDTO | null> {
        return Localisation.findByPk(id).then((Localisation: localisationId | null) => LocalisationMapper.mapToDto(Localisation))
    }
    findAll(): Promise<localisationDTO[]> {
        return Localisation.findAll().then((Localisations: localisationId[]) => Localisations.map((Localisation: localisationId) => LocalisationMapper.mapToDto(Localisation)))
    }
    create(t: localisationDTO): Promise<localisationDTO> {
        return Localisation.create(t).then((user: localisationId) => LocalisationMapper.mapToDto(user))
    }
    delete(id: number): Promise<boolean> {
        return Localisation.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: localisationDTO, id: number): Promise<boolean> {
        return Localisation.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}