import { localisationDTO } from "../DTO/localisation.dto";
import { IRepository } from "../repository/core/repository.interface";
import { localisationTypes } from "../types/localisation";

export class LocalisationService {
    private localisationRepository: IRepository<localisationDTO>;

    constructor(_localisationRepository: IRepository<localisationDTO>) {
        this.localisationRepository = _localisationRepository;
    }

    async findById(id: number): Promise<localisationDTO | null> {
        return this.localisationRepository.findById(id).then(localisationDTO => {
            if(localisationDTO === null) return null;
            return localisationDTO
        })
    }

    async findAll(): Promise<localisationDTO[] | null> {
        return this.localisationRepository.findAll().then(localisationDTO => {
            if(localisationDTO === null) return null;
            return localisationDTO
        })
    }

    async create(localisation: localisationTypes): Promise<localisationDTO | null> {
        return this.localisationRepository.create(localisation).then(localisationDTO => {
            if(localisationDTO === null) return null;
            return localisationDTO
        })
    }

    async delete(id: number): Promise<boolean> {
        return this.localisationRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(localisation: localisationTypes, id: number): Promise<boolean> {
        return this.localisationRepository.update(localisation,id).then(good => good)
    }
}