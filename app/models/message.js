const mongoose = require('mongoose')

let MessageSchema = mongoose.Schema(
   {
     message: { type: String, required: true }
   },
   {
     timestamps: {createdAt: 'date_created', updatedAt: 'last_updated'},
     collection: 'messages'
   }
)

mongoose.model('Message', MessageSchema)