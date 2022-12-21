import { IRepository } from "./core/repository.interface";
import { PlanningDTO } from "../DTO/planning.dto";

export class PlanningRepository implements IRepository<PlanningDTO> {
    findById(id: number): Promise<PlanningDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<PlanningDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: PlanningDTO): Promise<PlanningDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: PlanningDTO, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }

}