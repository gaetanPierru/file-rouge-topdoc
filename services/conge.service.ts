import { CongeDTO } from "../DTO/conge.dto";
import { IRepository } from "../repository/core/repository.interface";
import { congeTypes } from "../types/conge";
import { IService } from "./core/service.interface";

export class CongeService implements IService<CongeDTO>{
    private CongeRepository: IRepository<CongeDTO>;

    constructor(_CongeRepository: IRepository<CongeDTO>) {
        this.CongeRepository =_CongeRepository;
    }

    async findById(id: number): Promise<CongeDTO | null> {
        return this.CongeRepository.findById(id).then(CongeDTO => {
            if(CongeDTO === null) return null;
            return CongeDTO
        })
    }

    async findAll(): Promise<CongeDTO[] | null> {
        return this.CongeRepository.findAll().then(CongeDTO => {
            if(CongeDTO === null) return null;
            return CongeDTO
        })
    }

    async create(Conge: congeTypes): Promise<CongeDTO | null> {
        return this.CongeRepository.create(Conge).then(CongeDTO => {
            if(CongeDTO === null) return null;
            return CongeDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.CongeRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(Conge: congeTypes, id: number): Promise<number |boolean> {
        return this.CongeRepository.update(Conge,id).then(good => good)
    }
}