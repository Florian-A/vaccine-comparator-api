import * as express from 'express'
import * as cors from 'cors'
import { Vaccine } from './model/vaccine'
import { VaccineService } from './service/vaccine.service'
const app = express()

app.use(cors());


app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

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