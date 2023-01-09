import { Router } from "express";
import { usersController } from "./userController"
import { roleController } from "./roleController"
import { localisationController } from './localisationController';
import { authController } from "./authController";
import { activiteController } from "./activiteController";
import { rendezVousController } from "./rendezVousController";
import { bannisController } from "./bannisController";
import { congeController } from "./congeController";
import { jourController } from "./jourController";
import { planningController } from "./planningController";
import { PlanningDayController } from "./planningDayController";

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiController = Router();
const port = process.env.PORT || 5000
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API TopDoc',
            description: 'Swagger TopDoc',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url: `http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./controllers/*.ts`]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

apiController.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
apiController.use('/users', usersController)
apiController.use('/roles', roleController)
apiController.use('/localisations', localisationController)
apiController.use('/auth', authController)
apiController.use('/activite', activiteController)
apiController.use('/rdv', rendezVousController)
apiController.use('/bannis', bannisController)
apiController.use('/conge', congeController)
apiController.use('/jour', jourController)
apiController.use('/planning', planningController)
apiController.use('/planningJour', PlanningDayController)

export { apiController }