const fs = require('fs')
const path = require('path')
const join = path.join
const express =  require('express')
const { resolve } = require('path')
const mongoose = require('mongoose')
const models = join(__dirname, 'app/models')
const app = express()
const DB = 'mongodb://0.0.0.0:27017/fungjai_mun'
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect(DB)

// Bootstrap models
fs.readdirSync(models)
   .filter(file => ~file.indexOf('.js'))
   .forEach(file => require(join(models, file)))

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Controller
const appRouter = require(resolve('app/controller'))
const APP_PATH =  '/'
app.use(APP_PATH, appRouter(app))

app.listen(3000,() => {
  console.log('Port 3000!')
})

module.exports = app