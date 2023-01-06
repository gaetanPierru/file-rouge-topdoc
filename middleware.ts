import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'

export default function authenticateToken(req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    let message = 'No token given'
    if (token == null) return res.status(401).send({ message })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, user: any) => {
        message = 'Expired token.'
        if (err) return res.status(403).send({ tokenIsExpired: true, message: message, data: err })
        req.user = user
        next()
    })
}

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    if (err) {
      res.sendStatus(err.status || 500);
      res.send({ error: err.message });
    }
    next();
  }
  