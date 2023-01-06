import User, { Token } from "../database/connect";
import { AuthDTO } from "../DTO/auth.dto";
import { userLoginDTO } from "../DTO/user.dto";
import { AuthMapper } from "../mapper/auth.mapper";
import { tokenId } from "../types/token";
import { userId } from "../types/user";
import { IRepositoryAuth } from "./core/repository.interface";

export class AuthRepository implements IRepositoryAuth<AuthDTO, userLoginDTO> {
    findUsers(): Promise<userLoginDTO[]> {
        return User.findAll().then((users: any) => users.map((user: userId) => AuthMapper.mapToLoginDto(user)))
    }
    create(t: AuthDTO): Promise<AuthDTO | null> {
        return Token.create(t).then((token: tokenId) => AuthMapper.mapToDto(token))
    }
    update(t: AuthDTO, id: number): Promise<number | boolean> {
        return Token.update(t, {where: {userId: id}}).then(((good: boolean[]) => good[0]))
    }
    findAll(): Promise<AuthDTO[]> {
        return Token.findAll().then((tokens: tokenId[]) => tokens.map((token) => AuthMapper.mapToDto(token)))
    }
}