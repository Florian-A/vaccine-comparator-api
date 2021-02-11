import * as express from 'express'
import { Vaccine } from './model/vaccine'
import { VaccineService } from './service/vaccine.service'
const app = express()

app.get('/', (req, res) => {
  res.send(
    {
      message: 'ok grp4',
      description: 'Everything is okey in the best of all possible worlds !'
    }
  )
})

app.get('/status', (req, res) => {
  res.send('online')
})

app.listen(process.env.WEB_PORT, () => {
  console.log(`Listen on -> http://localhost:${process.env.WEB_PORT}`)
})