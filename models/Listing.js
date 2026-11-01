const mongoose = require('mongoose')

// Schema
const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String,
        enum: ['Expensive', 'Cheap']

    },

})
const listingSchema = mongoose.Schema({
    streetAddress:{
        type: Number
    },
    city:{
        type: String
    },
    price:{
        type: Number
    },
    size:{
        type: Number
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        // unique: true // if you need a one to one relation
    },
    categorys: categorySchema
}, {timestamps: true})

//  Model
const Listing = mongoose.model('Listing', listingSchema)

// Export Model

module.exports = Listing