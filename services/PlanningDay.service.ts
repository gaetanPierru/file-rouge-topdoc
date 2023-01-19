import { PlanningComplet, PlanningFullDTO } from "../DTO/planning.dto";
import { IRepository, IRepositoryPlanning } from "../repository/core/repository.interface";
import { planningTypes } from "../types/planning";
import { IServicePlanning } from "./core/service.interface";

export class PlanningDayService implements IServicePlanning<PlanningFullDTO>{
    private PlanningRepository: IRepositoryPlanning<PlanningFullDTO>;

    constructor(_PlanningRepository: IRepositoryPlanning<PlanningFullDTO>) {
        this.PlanningRepository =_PlanningRepository;
    }

    async findById(id: number): Promise<PlanningFullDTO | null> {
        return this.PlanningRepository.findById(id).then(PlanningDTO => {
            if(PlanningDTO === null) return null;
            return PlanningDTO
        })
    }

    async create(Planning: any): Promise<PlanningFullDTO | null> {
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

    async update(Planning: PlanningFullDTO, id: number): Promise<number |boolean> {
        return this.PlanningRepository.update(Planning,id).then(good => good)
    }
}