const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({

    userId : {
        required : true,
        type : String,
        unique : true
    },
    name : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String,
        unique : true
    },
    password : {
        required  :true,
        type : String
    },
    // images : [{
    //     imageId : {
    //         type : String
    //     },
    //     uploadDate : {
    //         type : Date
    //     }
    // }]
})

module.exports = mongoose.model('User', UserSchema)