import { Router } from "express";
import handler from "../handler/activite.handler";

const activiteController = Router();

/**
 * @swagger
 * tags:
 *      name: Activite
 *      description: Manage users
 */

/**
 * @openapi
 * /api/activite:
 *   get:
 *      tags: [Activite]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all activities.
 */
activiteController.get("/", handler.getActivites)

/**
 * @openapi
 * /api/activite/{id}:
 *  get:
 *      tags: [Activite]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get the activite of given id.
 */
activiteController.get("/:id", handler.getActiviteId)

/**
  * @openapi
  * /api/activite/{id}:
  *  delete:
  *      tags: [Activite]
  *      description: Delete an template
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an activite. 
  */
activiteController.delete("/:id", handler.deleteActivite)

/**
  * @openapi
  * /api/activite:
  *  post:
  *      tags: [Activite]
  *      description: Add an activite
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "fonction":"string","description": "description", "type": "type","estActif": true, "LocalisationId": 1 }
  *      responses:
  *        200:
  *          description: Create a new user.
  * 
  */
activiteController.post("/", handler.postActivite)

export { activiteController };