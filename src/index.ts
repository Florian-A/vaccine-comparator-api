import * as express from 'express'
import { Args } from "./helper/args"

const app = express()
const port = 3000

Args.required("env", ["local", "test", "beta", "prod"])
const ENV = Args.get("env")

console.log(ENV);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
