import { Router } from "express";
import { usersController } from "./userController"
import { tokenController } from "./tokenController"
import { roleController } from "./roleController"
import { localisationController } from './localisationController';
import { authController } from "./authController";

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiController = Router();
const port = process.env.PORT || 5000
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API CSE',
            description: 'Swagger CSE',
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
apiController.use('/tokens', tokenController)
apiController.use('/roles', roleController)
apiController.use('/localisations', localisationController)
apiController.use('/auth', authController)

export { apiController }