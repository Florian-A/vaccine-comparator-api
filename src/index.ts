import * as express from 'express'
import { Vaccine } from './model/vaccine'
import { VaccineService } from './service/vaccine.service'
const app = express()

// VaccineService.getById(1).then(
//   vaccine => {
//     console.log(vaccine)
//   })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.WEB_PORT, () => {
  console.log(`Listen on -> http://localhost:${process.env.WEB_PORT}`)
})