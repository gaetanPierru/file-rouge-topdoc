import { AuthDTO } from "../DTO/auth.dto";
import { tokenId } from "../types/token";

export class AuthMapper {
    static mapToDto(auth: tokenId): AuthDTO | null {
        if (auth === null) return null;
        const dto : AuthDTO = {
            userId: auth.UserId,
            refreshToken: auth.refreshToken
        }

        return dto;
    }
}