import { IRepository } from "./core/repository.interface";
import { RendezVousDTO } from "../DTO/rendezVous.dto";

export class RendezVousRepository implements IRepository<RendezVousDTO> {
    findById(id: number): Promise<RendezVousDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<RendezVousDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: RendezVousDTO): Promise<RendezVousDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: RendezVousDTO, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }

}