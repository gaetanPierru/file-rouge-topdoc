import { Router } from "express";
import { User, Localisation, Role } from "../database/connect";
import { ApiException } from "../types/exception";
import { userId, userTypes } from "../types/user";
import { ValidationError } from "sequelize";
import bcrypt from "bcrypt"
import { adminController } from "./adminController";
import handler from "../handler/user.handler";

const usersController = Router();

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
usersController.get("/", handler.getUsers)



/**
  * @openapi
  * /api/users:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "mot_de_passe":"string","email": "email", "telephone": "780372674","genre": "M", "prenom": "p", "nom": "n", "date_de_naissance" : "2020-01-01" }
  *      responses:
  *        200:
  *          description: Create a new user.
  */
usersController.post("/", handler.postUser)

/**
  * @openapi
  * /api/users/{id}:
  *  delete:
  *      tags: [Users]
  *      description: Delete an template
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an user. 
  */
usersController.delete("/:id", handler.deleteUser)

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *      tags: [Users]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get the user of given id.
 */
// usersController.get('/:id', async (req, res) => {
//     User.findByPk(req.params.id, {attributes: {exclude: ['password']}})
//         .then((user: userTypes) => {
//             if (user === null) {
//                 const message = "L'utilisateur n'existe pas."
//                 return res.status(404).json({ message })
//             }

//             const message: string = 'Utilisateur trouvé.'
//             res.json({ message, data: user })
//         })
//         .catch((error: ApiException) => {
//             const message = "Echec Utilisateur non trouvé."
//             res.status(500).json({ message, data: error })
//         })
// })
usersController.get('/:id', handler.getUserId)

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *      tags: [Users]
 *      description: Update an template
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "mot_de_passe":"string","email": "email", "telephone": "780372674", "genre": "M", "prenom": "p", "nom": "n", "date_de_naissance" : "2020-01-01" }
 *      responses:
 *        200:
 *          description: Update the user of given id.
 */
usersController.put('/:id', handler.updateUser)

usersController.use("/admin", adminController)

export { usersController }