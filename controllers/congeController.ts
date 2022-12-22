import { Router } from "express";
import handler from "../handler/conge.handler";


const congeController = Router();



/**
 * @swagger
 * tags:
 *      name: conge
 *      description: Manage conges
 */

/**
  * @openapi
  * /api/conge:
  *  post:
  *      tags: [conge]
  *      description: Create a conge
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"date_debut": "2020-01-01","date_fin": "2020-02-02","ActiviteId": 1}
  *      responses:
  *        200:
  *          description: Create a new conge.
  */
congeController.post('/',handler.postConge)

/**
  * @openapi
  * /api/conge/{id}:
  *  delete:
  *      tags: [conge]
  *      description: Delete a conge
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a conge. 
  */
congeController.delete('/:id', handler.deleteConge)

/**
 * @openapi
 * /api/conge:
 *   get:
 *      tags: [conge]
 *      responses:
 *        200:
 *          description: Get the list of all conge.
 */
congeController.get('/', handler.getConges)

/**
 * @openapi
 * /api/conge/{id}:
 *   get:
 *      tags: [conge]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique conge.
 */
congeController.get('/:id', handler.getCongeId)

/**
  * @openapi
  * /api/conge/{id}:
  *  put:
  *      tags: [conge]
  *      description: Update a conges
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
  *         default: {"date_debut": "2020-01-01","date_fin": "2020-02-02","ActiviteId": 1}
  *      responses:
  *        200:
  *          description: Update the conge of given id.
  */
congeController.put('/:id', handler.updateConge)

export { congeController }