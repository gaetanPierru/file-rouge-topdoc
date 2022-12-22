import { Router } from "express";
import handler from "../handler/bannis.handler";

const bannisController = Router();



/**
 * @swagger
 * tags:
 *      name: bannis
 *      description: Manage banniss
 */

/**
  * @openapi
  * /api/bannis:
  *  post:
  *      tags: [bannis]
  *      description: Create a bannis
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"bannis_email": "test@gmail.com","raison": "test"}
  *      responses:
  *        200:
  *          description: Create a new bannis.
  */
bannisController.post('/',handler.postBannis)

/**
  * @openapi
  * /api/bannis/{id}:
  *  delete:
  *      tags: [bannis]
  *      description: Delete a bannis
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a bannis. 
  */
bannisController.delete('/:id', handler.deleteBannis)

/**
 * @openapi
 * /api/bannis:
 *   get:
 *      tags: [bannis]
 *      responses:
 *        200:
 *          description: Get the list of all bannis.
 */
bannisController.get('/', handler.getBanniss)

/**
 * @openapi
 * /api/bannis/{id}:
 *   get:
 *      tags: [bannis]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique bannis.
 */
bannisController.get('/:id', handler.getBannisId)

/**
  * @openapi
  * /api/bannis/{id}:
  *  put:
  *      tags: [bannis]
  *      description: Update a banniss
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
  *         default: { "numero_de_rue": 1, "address": "adresse", "ville": "menfou", "code_postal": 12345 }
  *      responses:
  *        200:
  *          description: Update the bannis of given id.
  */
bannisController.put('/:id', handler.updateBannis)

export { bannisController }