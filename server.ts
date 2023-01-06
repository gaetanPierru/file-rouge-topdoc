import 'dotenv/config'
import { Response, Request } from 'express';
import { apiController } from './controllers/apiController';
import { initDb } from './database/connect';
import cors from 'cors';
import helmet from 'helmet';

const express = require("express")
const app = express()
const port = process.env.PORT || 5000

// todo mettre dans un fichier a part //
import morgan from 'morgan';
import path from 'path';
if (process.env.Prod == "prod"){
    const rfs = require("rotating-file-stream")
    const accesLogStream = rfs.createStream("log.log", {
        interval: '1d',
        compress: "gzip",
        maxFiles: 10,
        path: path.join(__dirname, 'log')
    })
    app.use(morgan('combined', { stream: accesLogStream}))
}else {
    app.use(morgan('dev', {
        skip: function (req, res) { return res.statusCode < 400 }
      }))
}

////////////////////////////

app.disable('x-powered-by');

// Pour recréer DB, à commenter sinon
// initDb()
//

app.use(helmet());
app.use(cors())
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})

app.use('/api', apiController)

app.use(({ res: ApiException }: any) => {
    const message = 'Ressource not found.'
    return ApiException.status(404).json({ message })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
export default app
