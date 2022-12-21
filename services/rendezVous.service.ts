import { RendezVousDTO } from "../DTO/rendezVous.dto";
import { IRepository } from "../repository/core/repository.interface";
import { rendezVousTypes } from "../types/rendezVous";

export class RendezVousService {
    private RendezVousRepository: IRepository<RendezVousDTO>;

    constructor(_RendezVousRepository: IRepository<RendezVousDTO>) {
        this.RendezVousRepository =_RendezVousRepository;
    }

    async findById(id: number): Promise<RendezVousDTO | null> {
        return this.RendezVousRepository.findById(id).then(RendezVousDTO => {
            if(RendezVousDTO === null) return null;
            return RendezVousDTO
        })
    }

    async findAll(): Promise<RendezVousDTO[] | null> {
        return this.RendezVousRepository.findAll().then(RendezVousDTO => {
            if(RendezVousDTO === null) return null;
            return RendezVousDTO
        })
    }

    async create(RendezVous: rendezVousTypes): Promise<RendezVousDTO | null> {
        return this.RendezVousRepository.create(RendezVous).then(RendezVousDTO => {
            if(RendezVousDTO === null) return null;
            return RendezVousDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.RendezVousRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(RendezVous: rendezVousTypes, id: number): Promise<number |boolean> {
        return this.RendezVousRepository.update(RendezVous,id).then(good => good)
    }
}