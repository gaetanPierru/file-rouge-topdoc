import { userFullDTO } from "../DTO/user.dto";
import { ISpecial } from "./core/repository.interface";
import User from "../database/connect";
import { Localisation } from "../database/connect";
import { UserLocalisationMapper } from "../mapper/userLocalisation.mapper";

export class UserFullRepository implements ISpecial<userFullDTO> {
    findById(id: number): Promise<userFullDTO | null> {
        return User.findByPk(id, {include: [
            {
                model: Localisation,
                required: true
            }
        ]} ).then((user:any) => UserLocalisationMapper.mapToDto(user))
    }
    findAll(): Promise<userFullDTO[]> {
        return User.findAll({include: [
            {
                model: Localisation,
                required: true
            }
        ]}).then((users) => users.map((user:any) => UserLocalisationMapper.mapToDto(user)))
    }
}