const { resolve } = require('path')
const express =  require('express')
const home = require(resolve('app/controller/home'))
const validator = require('../validator')


module.exports = (app) => {
  let router = express.Router()

  router.get('/home',
     home.get)

  router.post('/home',
     validator.validatorMessage,
     validator.validatorError,
     home.post)

  router.get('/', (req, res, next) => res.json({title: `Hello world`}))
  return router
}

