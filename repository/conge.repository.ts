import { IRepository } from "./core/repository.interface";
import { CongeDTO } from "../DTO/conge.dto";

export class CongeRepository implements IRepository<CongeDTO> {
    findById(id: number): Promise<CongeDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<CongeDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: CongeDTO): Promise<CongeDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: CongeDTO, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }


}