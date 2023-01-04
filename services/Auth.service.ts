import { AuthDTO } from "../DTO/auth.dto";
import { IRepositoryAuth } from "../repository/core/repository.interface";
import { IServiceToken } from "./core/service.interface";

export class AuthService implements IServiceToken<AuthDTO> {

    private authRepo: IRepositoryAuth<AuthDTO>;

    constructor(_authRepo: IRepositoryAuth<AuthDTO>) {
        this.authRepo =_authRepo;
    }

    findAll(): Promise<AuthDTO[] | null> {
        return this.authRepo.findAll().then(authdto => {
            if(authdto === null) return null;
            return authdto
        })
    }
    create(t: AuthDTO): Promise<AuthDTO | null> {
        return this.authRepo.create(t).then(authdto => {
            if(authdto === null) return null;
            return authdto
        })
    }
    update(t: AuthDTO, id: number): Promise<number | boolean> {
        return this.authRepo.update(t,id).then(good => good)
    }

}