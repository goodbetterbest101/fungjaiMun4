const { resolve } = require('path')
const mongoose = require('mongoose')
const Message = mongoose.model('Message')

exports.get = async (req, res, next) => {
  try {
    res.send('Welcome to Fungjai Mun')
  }
  catch (e) {
    console.log(e)
  }
}

exports.getAdmin = async (req, res, next) => {
  try {
    const allMessage = await Message.find()
    res.json(allMessage)
  }
  catch (e) {
    console.log(e)
  }
}

exports.post = async (req, res, next) => {
  try {
    const { body } = req
    const message = await new Message({
       ...body
    }).save()
    res.json(message)
  }
  catch (e) {
    console.log(e)
  }
}