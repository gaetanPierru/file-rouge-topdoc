import { IRepository } from "./core/repository.interface";
import { roleDTO } from "../DTO/role.dto";

export class RoleRepository implements IRepository<roleDTO> {
    findById(id: number): Promise<roleDTO | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<roleDTO[]> {
        throw new Error("Method not implemented.");
    }
    create(t: roleDTO): Promise<roleDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: roleDTO, id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
 

}