const { resolve } = require('path')
const express =  require('express')
const home = require(resolve('app/controller/home'))


module.exports = (app) => {
  let router = express.Router()
  router.get('/home',
     home.get)

  router.get('/', (req, res, next) => res.json({title: `Hello world`}))
  return router
}

