import { Router } from "express";
import { planningDayHandler } from "../inject";

const PlanningDayController = Router();

/**
 * @swagger
 * tags:
 *      name: Planning Jour
 *      description: Manage users
 */

/**
 * @openapi
 * /api/planningJour/{id}:
 *  get:
 *      tags: [Planning Jour]
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
PlanningDayController.get("/:id", planningDayHandler.getPlanningId)

/**
  * @openapi
  * /api/planningJour/{id}:
  *  delete:
  *      tags: [Planning Jour]
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
PlanningDayController.delete("/:id", planningDayHandler.deletePlanning)

/**
  * @openapi
  * /api/planningJour:
  *  post:
  *      tags: [Planning Jour]
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
PlanningDayController.post("/", planningDayHandler.postPlanning)




export { PlanningDayController };