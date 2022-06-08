const mongoose = require('mongoose')

const bankSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please add a text value'],
        },
        email: {
            type: String,
            required: [true, 'please add a text value'],

        },
        status: {
            type: String,
            required: [true, 'please add a text value'],
            
        }
    },
   
)

module.exports = mongoose.model('Bank', bankSchema)