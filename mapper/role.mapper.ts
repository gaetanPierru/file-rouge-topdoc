import { roleDTO } from "../DTO/role.dto";
import { roleId } from "../types/role";

export class RoleMapper {
    static mapToDto(role: roleId | null): roleDTO | null {
        if (role === null) return null;
        const dto : roleDTO = {
            role: role.role
        }

        return dto;
    }
}