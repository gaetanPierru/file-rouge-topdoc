import { IRepository } from "./core/repository.interface";
import { JourDTO } from "../DTO/jour.dto";
import { Jour } from "../database/connect";
import { JourMapper } from "../mapper/jour.mapper";
import { jourId } from "../types/jour";

export class JourRepository implements IRepository<JourDTO> {
    findById(id: number): Promise<JourDTO | null> {
        return Jour.findByPk(id).then((jour: jourId | null) => JourMapper.mapToDto(jour))
    }
    findAll(): Promise<JourDTO[]> {
        return Jour.findAll().then((jour: jourId[]) => jour.map((jour) => JourMapper.mapToDto(jour)))
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