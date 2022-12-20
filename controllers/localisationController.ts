import { Router } from "express";
import { Localisation } from "../database/connect";
import { localisationTypes } from "../types/localisation";
import { ValidationError } from "sequelize";
import { ApiException } from "../types/exception";
import handler from "../handler/localisation.handler";

const localisationController = Router();

/**
 * @swagger
 * tags:
 *      name: localisations
 *      description: Manage localisations
 */

/**
  * @openapi
  * /api/localisations:
  *  post:
  *      tags: [localisations]
  *      description: Create a localisation
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "numero_de_rue": 1, "address": "adresse", "ville": "ville", "code_postal": 12345 }
  *      responses:
  *        200:
  *          description: Create a new localisation.
  */
localisationController.post('/', handler.postLocalisation)

/**
  * @openapi
  * /api/localisations/{id}:
  *  delete:
  *      tags: [localisations]
  *      description: Delete a localisation
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a localisation. 
  */
localisationController.delete('/:id', handler.deleteLocalisation)

/**
 * @openapi
 * /api/localisations:
 *   get:
 *      tags: [localisations]
 *      responses:
 *        200:
 *          description: Get the list of all localisation.
 */
localisationController.get('/', handler.getLocalisations)

/**
 * @openapi
 * /api/localisations/{id}:
 *   get:
 *      tags: [localisations]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique localisation.
 */
localisationController.get('/:id', handler.getLocalisationId)

/**
  * @openapi
  * /api/localisations/{id}:
  *  put:
  *      tags: [localisations]
  *      description: Update a localisations
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
  *          description: Update the localisation of given id.
  */
localisationController.put('/:id', handler.updateLocalisation)

export { localisationController }