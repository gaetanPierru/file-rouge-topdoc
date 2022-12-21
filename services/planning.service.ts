import { PlanningDTO } from "../DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { planningTypes } from "../types/planning";

export class PlanningService {
    private PlanningRepository: IRepository<PlanningDTO>;

    constructor(_PlanningRepository: IRepository<PlanningDTO>) {
        this.PlanningRepository =_PlanningRepository;
    }

    async findById(id: number): Promise<PlanningDTO | null> {
        return this.PlanningRepository.findById(id).then(PlanningDTO => {
            if(PlanningDTO === null) return null;
            return PlanningDTO
        })
    }

    async findAll(): Promise<PlanningDTO[] | null> {
        return this.PlanningRepository.findAll().then(PlanningDTO => {
            if(PlanningDTO === null) return null;
            return PlanningDTO
        })
    }

    async create(Planning: planningTypes): Promise<PlanningDTO | null> {
        return this.PlanningRepository.create(Planning).then(PlanningDTO => {
            if(PlanningDTO === null) return null;
            return PlanningDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.PlanningRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(Planning: planningTypes, id: number): Promise<number |boolean> {
        return this.PlanningRepository.update(Planning,id).then(good => good)
    }
}