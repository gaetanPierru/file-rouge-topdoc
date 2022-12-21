import { JourDTO } from "../DTO/jour.dto";
import { IRepository } from "../repository/core/repository.interface";
import { jourTypes } from "../types/jour";

export class JourService {
    private JourRepository: IRepository<JourDTO>;

    constructor(_JourRepository: IRepository<JourDTO>) {
        this.JourRepository =_JourRepository;
    }

    async findById(id: number): Promise<JourDTO | null> {
        return this.JourRepository.findById(id).then(JourDTO => {
            if(JourDTO === null) return null;
            return JourDTO
        })
    }

    async findAll(): Promise<JourDTO[] | null> {
        return this.JourRepository.findAll().then(JourDTO => {
            if(JourDTO === null) return null;
            return JourDTO
        })
    }

    async create(Jour: jourTypes): Promise<JourDTO | null> {
        return this.JourRepository.create(Jour).then(JourDTO => {
            if(JourDTO === null) return null;
            return JourDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.JourRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(Jour: jourTypes, id: number): Promise<number |boolean> {
        return this.JourRepository.update(Jour,id).then(good => good)
    }
}