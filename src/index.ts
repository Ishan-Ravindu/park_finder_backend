import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { AuthMiddleware } from './middleware'
import hello from "./routes/hello"
import parkingList from "./routes/parking-list"

const app: Express = express()

// app.use(AuthMiddleware.decodeToken)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', hello)
app.get('/parking-list', parkingList)

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
