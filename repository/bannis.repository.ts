import { IRepository } from "./core/repository.interface";
import { BannisDTO } from "../DTO/bannis.dto";

export class BannisRepository implements IRepository<BannisDTO> {
    findById(id: number): Promise<BannisDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<BannisDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: BannisDTO): Promise<BannisDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: BannisDTO, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }

}