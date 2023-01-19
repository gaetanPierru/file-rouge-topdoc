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
  *      description: Add an Planning
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"planning":{"nom_planning":"courant","date_debut_planning":"2023-01-11","duree_validite_calendrier":6,"activiteId":1},"Jours":[{"jour":1,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":2,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":3,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":4,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":5,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":6,"heure_debut_journee":"2022-01-01T07:30:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30},{"jour":7,"heure_debut_journee":"2022-01-01T07:00:00.000Z","heure_fin_journee":"2022-01-01T17:30:00.000Z","duree_crenaux":30}]}
  *      responses:
  *        200:
  *          description: Create a new user.
  * 
  */
PlanningDayController.post("/", planningDayHandler.postPlanning)




export { PlanningDayController };