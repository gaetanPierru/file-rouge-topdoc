import { Router } from "express";
import handler from "../handler/jour.handler";


const jourController = Router();



/**
 * @swagger
 * tags:
 *      name: jour
 *      description: Manage jours
 */

/**
  * @openapi
  * /api/jour:
  *  post:
  *      tags: [jour]
  *      description: Create a jour
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"jour": 1,"heure_debut_journee": "2020-01-01T00:00:00.000Z","heure_fin_journee": "2020-02-02T00:00:00.000Z", "duree_crenaux": 30}
  *      responses:
  *        200:
  *          description: Create a new jour.
  */
jourController.post('/',handler.postJour)

/**
  * @openapi
  * /api/jour/{id}:
  *  delete:
  *      tags: [jour]
  *      description: Delete a jour
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a jour. 
  */
jourController.delete('/:id', handler.deleteJour)

/**
 * @openapi
 * /api/jour:
 *   get:
 *      tags: [jour]
 *      responses:
 *        200:
 *          description: Get the list of all jour.
 */
jourController.get('/', handler.getJours)

/**
 * @openapi
 * /api/jour/{id}:
 *   get:
 *      tags: [jour]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique jour.
 */
jourController.get('/:id', handler.getJourId)

/**
  * @openapi
  * /api/jour/{id}:
  *  put:
  *      tags: [jour]
  *      description: Update a jours
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
  *         default:   {"jour": 1,"heure_debut_journee": "2020-01-01T00:00:00.000Z","heure_fin_journee": "2020-02-02T00:00:00.000Z", "duree_crenaux": 30}
  *      responses:
  *        200:
  *          description: Update the jour of given id.
  */
jourController.put('/:id', handler.updateJour)

export { jourController }