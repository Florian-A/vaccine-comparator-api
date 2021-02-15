import * as express from 'express'
import * as cors from 'cors'
import { Vaccine } from './model/vaccine'
import { VaccineService } from './service/vaccine.service'
const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.json(
    {
      message: 'Okey for group 4 !',
      description: 'Everything is okey in the best of all possible worlds !'
    }
  )
})

app.get('/vaccines/:id', (req, res, next) => {
  VaccineService.getById(parseInt(req.params.id)).then(
    vaccine => {
      res.json(vaccine)
    })
})

app.get('/vaccines', (req, res) => {
  VaccineService.getAll().then(
    vaccine => {
      res.json(vaccine)
    })
})

app.get('/status', (req, res) => {
  res.json(
    {
      message: 'Service is online !'
    }
  )
})

app.listen(process.env.WEB_PORT, () => {
  console.log(`Listen on -> http://localhost:${process.env.WEB_PORT}`)
})