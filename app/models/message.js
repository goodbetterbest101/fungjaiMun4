const mongoose = require('mongoose')

let MessageSchema = mongoose.Schema(
   {
     message: { type: String, required: true }
   }
)

let Message = mongoose.model('Message', MessageSchema)
module.exports = Message