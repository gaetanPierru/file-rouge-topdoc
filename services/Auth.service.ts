import { AuthDTO } from "../DTO/auth.dto";
import { userLoginDTO } from "../DTO/user.dto";
import { IRepositoryAuth } from "../repository/core/repository.interface";
import { IServiceToken } from "./core/service.interface";
export class AuthService implements IServiceToken<AuthDTO, userLoginDTO> {

    private authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>;

    constructor(_authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>) {
        this.authRepo =_authRepo;
    }
    findUsers(): Promise<userLoginDTO[]> {
        return this.authRepo.findUsers().then(users => {
            return users
        })
    }

    findAll(): Promise<AuthDTO[]> {
        return this.authRepo.findAll().then(authdto => {
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