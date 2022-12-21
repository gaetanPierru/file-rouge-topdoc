import { BannisDTO } from "../DTO/bannis.dto";
import { bannisId } from "../types/bannis";

export class BannisMapper {
    static mapToDto(bannis: bannisId | null): BannisDTO | null {
        if (bannis === null) return null;
        const dto : BannisDTO = {
            bannis_email: bannis.bannis_email,
            raison: bannis.raison
        }

        return dto;
    }
}