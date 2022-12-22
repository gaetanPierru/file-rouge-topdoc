import { IRepository } from "./core/repository.interface";
import { RendezVousDTO } from "../DTO/rendezVous.dto";
import { RendezVous } from "../database/connect";
import { rendezVousId } from "../types/rendezVous";
import { RendezVousMapper } from "../mapper/rendezVous.mapper";


export class RendezVousRepository implements IRepository<RendezVousDTO> {
    findById(id: number): Promise<RendezVousDTO | null> {
        return RendezVous.findByPk(id).then((RendezVous: rendezVousId | null) => RendezVousMapper.mapToDto(RendezVous))
    }
    findAll(): Promise<RendezVousDTO[]> {
        return RendezVous.findAll().then((RendezVouss: rendezVousId[]) => RendezVouss.map((RendezVous: rendezVousId) => RendezVousMapper.mapToDto(RendezVous)))
    }
    create(t: RendezVousDTO): Promise<RendezVousDTO> {
        return RendezVous.create(t).then((user: rendezVousId) => RendezVousMapper.mapToDto(user))
    }
    delete(id: number): Promise<number |boolean> {
        return RendezVous.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: RendezVousDTO, id: number): Promise<number |boolean> {
        return RendezVous.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}