import { AuthDTO } from "../DTO/auth.dto";
import { userLoginDTO } from "../DTO/user.dto";
import { tokenId } from "../types/token";
import { userId } from "../types/user";

export class AuthMapper {
    static mapToDto(auth: tokenId): AuthDTO | null {
        if (auth === null) return null;
        const dto : AuthDTO = {
            UserId: auth.UserId,
            refreshToken: auth.refreshToken
        }

        return dto;
    }

    static mapToLoginDto(user: userId |null): userLoginDTO {
        if (user === null){
            return null as any;
        } 
        const dto : userLoginDTO = {
            id: user.id,
            email: user.email,
            mot_de_passe: user.mot_de_passe
        }

        return dto;
    }
}