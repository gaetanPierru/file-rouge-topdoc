import { IRepository } from "./core/repository.interface";
import { BannisDTO } from "../DTO/bannis.dto";
import { Bannis } from "../database/connect";
import { BannisMapper } from "../mapper/bannis.mapper";
import { bannisId } from "../types/bannis";

export class BannisRepository implements IRepository<BannisDTO> {
    findById(id: number): Promise<BannisDTO | null> {
        return Bannis.findByPk(id).then((Localisation: bannisId | null) => BannisMapper.mapToDto(Localisation))
    }
    findAll(): Promise<BannisDTO[]> {
        return Bannis.findAll().then((Localisations: bannisId[]) => Localisations.map((Localisation: bannisId) => BannisMapper.mapToDto(Localisation)))
    }
    create(t: BannisDTO): Promise<BannisDTO> {
        return Bannis.create(t).then((user: bannisId) => BannisMapper.mapToDto(user))
    }
    delete(id: number): Promise<number |boolean> {
        return Bannis.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: BannisDTO, id: number): Promise<number |boolean> {
        return Bannis.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}