// let {Schema, model} = require("mongoose")
// let studentSchema = new Schema({
//     name:{
//         type:String,
//         required:{value:true, message:"Name is mandatory"}
//     },
//     age:{
//         type:Number,
//         required:true
//     }
// }, {timestamps:true})

// module.exports = model("student", studentSchema)

let {Schema, model} = require("mongoose")

let studentSchema = new Schema({
    fn:{
        type:String,
        required:{value:true, message:"Name is mandatory"}
    },
    age:{
        type:Number,
        required:{value:true, message:"Age is mandatory"}
    }
}, {timestamps:true})

module.exports = model("student", studentSchema)