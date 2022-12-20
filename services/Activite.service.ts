import { activiteDTO } from "../DTO/activite.dto";
import { IRepository } from "../repository/core/repository.interface";
import { activityTypes } from "../types/activity";

export class ActiviteService {
    private activiteRepository: IRepository<activiteDTO>;

    constructor(_activiteRepository: IRepository<activiteDTO>) {
        this.activiteRepository =_activiteRepository;
    }

    async findById(id: number): Promise<activiteDTO | null> {
        return this.activiteRepository.findById(id).then(activiteDTO => {
            if(activiteDTO === null) return null;
            return activiteDTO
        })
    }

    async findAll(): Promise<activiteDTO[] | null> {
        return this.activiteRepository.findAll().then(activiteDTO => {
            if(activiteDTO === null) return null;
            return activiteDTO
        })
    }

    async create(activite: activityTypes): Promise<activiteDTO | null> {
        return this.activiteRepository.create(activite).then(activiteDTO => {
            if(activiteDTO === null) return null;
            return activiteDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.activiteRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(activite: activityTypes, id: number): Promise<number |boolean> {
        return this.activiteRepository.update(activite,id).then(good => good)
    }
}