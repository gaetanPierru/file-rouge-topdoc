import { IRepository } from "./core/repository.interface";
import { JourDTO } from "../DTO/jour.dto";

export class JourRepository implements IRepository<JourDTO> {
    findById(id: number): Promise<JourDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<JourDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: JourDTO): Promise<JourDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: JourDTO, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }

}