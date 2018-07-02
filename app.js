const fs = require('fs')
const path = require('path')
const join = path.join
const express =  require('express')
const { resolve } = require('path')
const mongoose = require('mongoose')
const models = join(__dirname, 'app/models')
const app = express()
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV
const DB = env === 'db_dev' ? 'mongodb://127.0.0.1:27017/fungjai_mun':'mongodb://mongo:27017/fungjai_mun'
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect(DB).then(
   () => {
     console.log('success')
   },
   err => {
     console.log(`Error: ${err}`)
   }
)

// Bootstrap models
fs.readdirSync(models)
   .filter(file => ~file.indexOf('.js'))
   .forEach(file => require(join(models, file)))

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

console.log(process.env.NODE_ENV)

// Controller
const appRouter = require(resolve('app/controller'))
const APP_PATH =  '/'
app.use(APP_PATH, appRouter(app))

app.listen(port,() => {
  console.log(`Port ${port}!`)
})

module.exports = app