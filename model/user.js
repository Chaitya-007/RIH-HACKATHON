const mongoose = require("mongoose");

// Define Schemes
// nameing convention => camelCase 
const userData = new mongoose.Schema(
    {
        name:{
            type: String,
            // required: true,
            // min: 6,
            // max: 255
        },
        email:{
            type: String,
            // required: true,
            // min: 6,
            // max: 255
        },
        phone:{
            type: String,
        },
        rating:{
            type: Number,
            // required: true,
            // min: 6,
            // max: 255
        },
        improvement:{
            type: String,
            // required: true,
            // min: 6,
            // max: 255
        },
        date:{
            type: Date,
            
        },
        time:{
            type: String,
            
        },
        location:{
            type: String,
            
        },
        officerBadge:{
            type: String,
            
        },
        officerName:{
            type: String,
            
        },
        reasonForInteraction:{
            type: String,
            
        },
        typeOfService:{
            type: String,
            
        },
        responseTime:{
            type: String,
            
        },
        communicationClarity:{
            type: String,
            
        },
        officerDemeanor:{
            type: String,
            
        },
        respectfulness:{   
            type: String,
            
        },
        demographicInfo:{
            type: String,
            
        },
        contactInfo:{
            type: String,
            
        },
        message:{
            type: String,
            
        },
        happyornot:{
            type: String,
            
        },
   
    }
)

// Model mai wrap karke jo bhi data hoga hamara usko collection mai wrap karenge
const User = mongoose.model('USER', userData);
// User is the name of the collection
// First letter should be capital of const *U*ser

// const User = mongoose.model('REGISTRATION', userData);

module.exports = User;
// Yaha par hum usko export karenge taki hum usko dusre file mai use kar sake like index.js mai