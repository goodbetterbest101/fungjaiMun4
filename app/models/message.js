const mongoose = require('mongoose')

let MessageSchema = mongoose.Schema(
   {
     message: { type: String, required: true }
   }
)

mongoose.model('Message', MessageSchema)