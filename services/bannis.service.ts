import { BannisDTO } from "../DTO/bannis.dto";
import { IRepository } from "../repository/core/repository.interface";
import { bannisTypes } from "../types/bannis";
import { IService } from "./core/service.interface";

export class BannisService implements IService<BannisDTO>{
    private bannisRepository: IRepository<BannisDTO>;

    constructor(_bannisRepository: IRepository<BannisDTO>) {
        this.bannisRepository =_bannisRepository;
    }

    async findById(id: number): Promise<BannisDTO | null> {
        return this.bannisRepository.findById(id).then(bannisDTO => {
            if(bannisDTO === null) return null;
            return bannisDTO
        })
    }

    async findAll(): Promise<BannisDTO[] | null> {
        return this.bannisRepository.findAll().then(bannisDTO => {
            if(bannisDTO === null) return null;
            return bannisDTO
        })
    }

    async create(bannis: bannisTypes): Promise<BannisDTO | null> {
        return this.bannisRepository.create(bannis).then(bannisDTO => {
            if(bannisDTO === null) return null;
            return bannisDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.bannisRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(bannis: bannisTypes, id: number): Promise<number |boolean> {
        return this.bannisRepository.update(bannis,id).then(good => good)
    }
}