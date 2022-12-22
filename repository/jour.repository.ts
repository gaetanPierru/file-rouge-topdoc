import { IRepository } from "./core/repository.interface";
import { JourDTO } from "../DTO/jour.dto";
import { Jour } from "../database/connect";
import { JourMapper } from "../mapper/jour.mapper";
import { jourId } from "../types/jour";

export class JourRepository implements IRepository<JourDTO> {
    findById(id: number): Promise<JourDTO | null> {
        return Jour.findByPk(id).then((Localisation: jourId | null) => JourMapper.mapToDto(Localisation))
    }
    findAll(): Promise<JourDTO[]> {
        return Jour.findAll().then((Localisations: jourId[]) => Localisations.map((Localisation: jourId) => JourMapper.mapToDto(Localisation)))
    }
    create(t: JourDTO): Promise<JourDTO> {
        return Jour.create(t).then((user: jourId) => JourMapper.mapToDto(user))
    }
    delete(id: number): Promise<number |boolean> {
        return Jour.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: JourDTO, id: number): Promise<number |boolean> {
        return Jour.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}