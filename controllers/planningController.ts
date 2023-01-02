import { Router } from "express";
import { planningHandler } from "../inject";


const planningController = Router();



/**
 * @swagger
 * tags:
 *      name: planning
 *      description: Manage plannings
 */

/**
  * @openapi
  * /api/planning:
  *  post:
  *      tags: [planning]
  *      description: Create a planning
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"nom_planning": "courant","date_debut_planning": "2022-12-22","duree_validite_calendrier": 6,"activiteId": 1}
  *      responses:
  *        200:
  *          description: Create a new planning.
  */
planningController.post('/',planningHandler.postPlanning)

/**
  * @openapi
  * /api/planning/{id}:
  *  delete:
  *      tags: [planning]
  *      description: Delete a planning
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a planning. 
  */
planningController.delete('/:id', planningHandler.deletePlanning)

/**
 * @openapi
 * /api/planning:
 *   get:
 *      tags: [planning]
 *      responses:
 *        200:
 *          description: Get the list of all planning.
 */
planningController.get('/', planningHandler.getPlannings)

/**
 * @openapi
 * /api/planning/{id}:
 *   get:
 *      tags: [planning]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique planning.
 */
planningController.get('/:id', planningHandler.getPlanningId)

/**
  * @openapi
  * /api/planning/{id}:
  *  put:
  *      tags: [planning]
  *      description: Update a plannings
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
  *         default: {"nom_planning": "courant","date_debut_planning": "2022-12-22","duree_validite_calendrier": 6,"activiteId": 1}
  *      responses:
  *        200:
  *          description: Update the planning of given id.
  */
planningController.put('/:id', planningHandler.updatePlanning)

export { planningController }