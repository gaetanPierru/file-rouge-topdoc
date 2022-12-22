import { Router } from "express";
import handler from "../handler/rendezVous.handler";


const rendezVousController = Router();

/**
 * @swagger
 * tags:
 *      name: RDV
 *      description: Manage RDV
 */

/**
 * @openapi
 * /api/rdv:
 *   get:
 *      tags: [RDV]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all activities.
 */
rendezVousController.get("/", handler.getRendezVous)

/**
 * @openapi
 * /api/rdv/{id}:
 *  get:
 *      tags: [RDV]
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
rendezVousController.get("/:id", handler.getRendezVousId)

/**
  * @openapi
  * /api/rdv/{id}:
  *  delete:
  *      tags: [RDV]
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
rendezVousController.delete("/:id", handler.deleteRendezVous)

/**
  * @openapi
  * /api/rdv:
  *  post:
  *      tags: [RDV]
  *      description: Add an activite
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"planningId": 1,"date_rendez_vous": "2022-12-22T08:07:27.834Z","duree_rendez_vous": 30}
  *      responses:
  *        200:
  *          description: Create a new user.
  * 
  */
rendezVousController.post("/", handler.postRendezVous)



/**
 * @openapi
 * /api/rdv/{id}:
 *  put:
 *      tags: [RDV]
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
 *         default: {"planningId": 1,"date_rendez_vous": "2022-12-22T08:07:27.834Z","duree_rendez_vous": 30}
 *      responses:
 *        200:
 *          description: Update the user of given id.
 */
  rendezVousController.put('/:id', handler.updateRendezVous)

export { rendezVousController };