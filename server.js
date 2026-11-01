// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')

const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')





// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


conntectToDB()


















// Routes go here
async function tesrRelationships() {
//     Step 1
// Create a new User.
// const createdUser = await User.create({ 
//         username: 'hajar',
//         password: '114455'
//     })

// Step 2
// Create a new Listing.
// const createdListing = await Listing.create({ 
//         streetAddress: 1122,
//         city: 'Almusalla',
//         price: 100000,
//         size: 200,
//         owner: createdUser._id, // Assign the newly created user's _id to the Listing's owner field.
//         categorys: {categoryName:'Expensive'}
//     })


// Assign the newly created user's _id to the Listing's owner field.
// Checkpoint DONE

// Open MongoDB Compass and verify that:

//     The User document was created. TRUE
//     The Listing document was created. TURE
//     The Listing's owner field contains the User's ObjectId. TRUE

// Step 3

// Erase all the code in the testRelationships() function

// Instead, retrieve all Listings using:

const allListings = await Listing.find().populate('owner') 
// Print the results using:

console.log(allListings)

// Notice that the owner field only contains an ObjectId.
// Step 4

// Update your query to use Mongoose's:

// .populate()

// Populate the owner field so that the entire User document is returned instead of only the ObjectId.

// Compare the output before and after using .populate().
//BEFORE POPULATE
// Connected to Database
// [
//   {
//     _id: new ObjectId('6ae6ee3e2cf1ca1f1c66dad5'),
//     streetAddress: 1122,
//     city: 'Almusalla',
//     price: 100000,
//     size: 200,
//     owner: new ObjectId('6ae6ee3e2cf1ca1f1c66dad3'),
//     categorys: {
//       categoryName: 'Expensive',
//       _id: new ObjectId('6ae6ee3e2cf1ca1f1c66dad6')
//     },
//     createdAt: 2026-11-01T07:46:06.733Z,
//     updatedAt: 2026-11-01T07:46:06.733Z,
//     __v: 0
//   }
// ]

//AFTER POPULATE
// Connected to Database
// [
//   {
//     _id: new ObjectId('6ae6ee3e2cf1ca1f1c66dad5'),
//     streetAddress: 1122,
//     city: 'Almusalla',
//     price: 100000,
//     size: 200,
//     owner: {
//       _id: new ObjectId('6ae6ee3e2cf1ca1f1c66dad3'),
//       username: 'hajar',
//       password: '114455',
//       createdAt: 2026-11-01T07:46:06.711Z,
//       updatedAt: 2026-11-01T07:46:06.711Z,
//       __v: 0
//     },
//     categorys: {
//       categoryName: 'Expensive',
//       _id: new ObjectId('6ae6ee3e2cf1ca1f1c66dad6')
//     },
//     createdAt: 2026-11-01T07:46:06.733Z,
//     updatedAt: 2026-11-01T07:46:06.733Z,
//     __v: 0
//   }
// ]

}

tesrRelationships()


 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
