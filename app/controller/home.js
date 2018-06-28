const { resolve } = require('path')
const mongoose = require('mongoose')
const Message = mongoose.model('Message')
// const Message = require(resolve('app/models/message'))

exports.get = async (req, res, next) => {
  try {
    console.log('asd')
    res.send('asdasdasd')
  }
  catch (e) {
    console.log(e)
  }
}