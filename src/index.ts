import * as express from 'express'
import { database } from './service/Database.service'
const app = express()
const port = process.env.WEB_PORT

database.query("SELECT * FROM vaccine").then(
  (res) => {
    console.log(res)
  }
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listen on -> http://localhost:${port}`)
})