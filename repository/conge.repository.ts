import { IRepository } from "./core/repository.interface";
import { CongeDTO } from "../DTO/conge.dto";
import { Conge } from "../database/connect";
import { CongeMapper } from "../mapper/conge.mapper";
import { congeId } from "../types/conge";

export class CongeRepository implements IRepository<CongeDTO> {
    findById(id: number): Promise<CongeDTO | null> {
        return Conge.findByPk(id).then((jour: congeId | null) => CongeMapper.mapToDto(jour))
    }
    findAll(): Promise<CongeDTO[]> {
        return Conge.findAll().then((jours: congeId[]) => jours.map((jour) => CongeMapper.mapToDto(jour)))
    }
    create(t: any): Promise<CongeDTO> {
        return Conge.create(t).then((user: congeId) => CongeMapper.mapToDto(user))
    }
    delete(id: number): Promise<number |boolean> {
        return Conge.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: CongeDTO, id: number): Promise<number |boolean> {
        return Conge.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }


}