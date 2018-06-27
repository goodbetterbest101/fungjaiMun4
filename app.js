const express =  require('express')
const { resolve } = require('path')
const mongoose = require('mongoose')
const mockgoose = require('mockgoose')
const appRouter = require(resolve('app/controller'))
const APP_PATH =  '/'
const app = express()
const DB = 'mongodb://0.0.0.0:27017/fungjaiMun'

module.exports = app

mongoose.Promise = global.Promise
mongoose.connect(DB).then(
   () => {
     console.log('Connected successful!')
   },
   err => {
     console.log(`Error : ${err}`)
   }
)

app.use(APP_PATH, appRouter(app))

app.listen(3000,() => {
  console.log('Port 3000!')
})
