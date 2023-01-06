import { Request, Response } from "express";
import { IService, IServiceToken } from "../services/core/service.interface";
import { AuthDTO } from "../DTO/auth.dto";
import { userLoginDTO } from "../DTO/user.dto";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export class AuthHandler {

    private authService: IServiceToken<AuthDTO, userLoginDTO>;

    constructor(service: IServiceToken<AuthDTO, userLoginDTO>) {
        this.authService = service;
    }

    token = async (req: Request, res: Response) => {
        try {
            const refreshToken = req.body.token
            if (refreshToken == null) return res.sendStatus(401)
            const token = await this.authService.findToken(refreshToken);

            if (token == null) return res.sendStatus(403)

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any) => {
                if (err) return res.sendStatus(403)
                const accessToken = jwt.sign({ id: token.userId }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
                res.json({ accessToken: accessToken })
            })
        } catch (err) {

        }
    }

    login = async (req: Request, res: Response) => {

        try {
            const user = await this.authService.findUser(req.body.email);

            if (user == null) {
                return res.status(401).json({ userFound: false, message: "utilisateur non trouvé" })
            }

            if (await bcrypt.compare(req.body.password, user.mot_de_passe)) {
                const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
                const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '1Y' })


                const token = await this.authService.findUT(user.id);

                if (token == null) {
                    await this.authService.create({ refreshToken: refreshToken, userId: user.id })
                } else {
                    await this; this.authService.update({ refreshToken: refreshToken }, user.id)
                }

                return res.status(200).json({ successfullLogin: 'bien connecte', accessToken: accessToken, refreshToken: refreshToken })
            } else {
                return res.status(401).json({ successfullLogin: false, message: 'non connecter' })
            }
        } catch (error) {
            return res.status(500).json(error)
        }

    }


    loginAdmin = async (req: Request, res: Response) => {
        try {
            res.status(200).json('pas encore implementé')
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
