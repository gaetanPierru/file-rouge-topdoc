import { Router } from "express";
import { adminController } from "./adminController";
import handler from "../handler/user.handler";
import handlerTwo from "../handler/userLocalisation.handler"
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
usersController.get("/", handlerTwo.getUsers)



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
  * 
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
usersController.get('/:id', handlerTwo.getUserId)

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