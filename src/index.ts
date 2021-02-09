import * as express from 'express'
import { Vaccine } from './model/vaccine'
import { database } from './service/Database.service'
import { VaccineService } from './service/vaccine.service'
const app = express()
const port = process.env.WEB_PORT

// database.query("SELECT * FROM vaccine").then(
//   (res) => {
//     console.log(res)
//   }
// )

//new Vaccine(null, "test", "bim", new Date(98, 1), null)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listen on -> http://localhost:${port}`)
})