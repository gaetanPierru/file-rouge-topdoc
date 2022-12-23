import { Role } from "../../database/connect";
import { roleDTO } from "../../DTO/role.dto";
import { RoleRepository } from "../../repository/role.repository";
import { roleId } from "../../types/role";

describe('RoleRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Role find by id', () => {
        it("doit retourne les details de l'Role", async () => {
            const id = 1;

            const mockReponse: roleId = {
                id: 1,
                role: "a"
            }

            const expected: roleDTO = {
                role: "a"
            }

            const repo = new RoleRepository()
             Role.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(Role.findOne).toHaveBeenCalledTimes(1)
             expect(Role.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Role findAll', () => {
        it("doit retourne les details des roles", async () => {
            const mockReponse : roleId[] = [
                {
                     id: 1,
                     role: 'a'

                }, {
                    id: 2,
                    role: 'b'
                }
            ]

            const expected: roleDTO[] = [
                {
                    role: 'a'
                }, {
                    role: 'b'
                }
            ]

            const repo = new RoleRepository()
            Role.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Role.findAll).toHaveBeenCalledTimes(1)
        })
    })

})