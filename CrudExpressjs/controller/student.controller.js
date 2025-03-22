// let Student = require("../model/student.schema");

// let addStudent = async(req, res, next)=>{
//     try {
//         let {name,age} = req.body;
//         let student = await Student.create({name, age})
//         res.json({error:false, message:"student added successfully"})
//     } catch (error) {
//         next(error)
//     }
// }

// let getStudents = async(req, res, next)=>{
//     try {
//         let students = await Student.find();
//         res.json({error:false, message:"students fetched successfully", data:students})
//     } catch (error) {
//         next(error)
//     }
// }



// let getStudent = async(req, res, next)=>{
//     try {
//         let {id} = req.params;
//         let student = await Student.findById(id)
//         if(!student){
//             res.json({error:true, message:"strudent not fetched by given id"})
//         }else{
//             res.json({error:false, message:"Student fetched successfully", data:student})
//         }
//     } catch (error) {
//         next(error)
//     }
// }
// let updateStudents = async(req, res, next)=>{
//     try {
//         let {id} = req.params;
//         let {name, age} = req.body;
//         let students = await Student.findById(id)
//         if(!students){
//             res.json({error:true, message:"strudent not upadted"})
//         }else{
//             let students = await Student.updateOne({_id:id}, {name, age}, {new:true})
//             res.json({error:false,message:"student updated successfully", data:students})
//         }
//     } catch (error) {
//         next(error)
//     }
// }


// let deleteStudent= async(req, res, next)=>{
//     try {
//         let {id} = req.params;
//         let student = await Student.findById(id)
//         if(!student){
//             res.json({error:true, message:"student not found with given id"})
//         }else{
//             let student = await Student.deleteOne({_id:id})
//             res.json({error:false, message:"student deleted successfully", data:student})
//         }
//     } catch (error) {
//         next(error)
//     }
// }


// module.exports = {
//     addStudent, getStudent, getStudents, updateStudents, deleteStudent
// }



let Student = require("../model/student.schema")
let addStudent = async(req, res, next)=>{
    try {
        let {fn,age} = req.body;
        console.log(fn,age);
        let student = await Student.create({fn, age})
        res.json({error:false, message:"Student added successfully"})
    } catch (error) {
        next(error)
    }
}

let getStudents = async(req, res, next)=>{
    try {

        let students = await Student.find()
        res.json({error:false, message:"Student fetched successfully", data:students})
    } catch (error) {
        next(error)
    }
}


let getStudent = async(req, res, next)=>{
    try {
        let {id} = req.params;
        console.log(id);
        let student = await Student.findById(id)
        if(!student){
            res.json({error:true, message:"Student not fetched based on given id"})
        }else{
            res.json({error:false, message:"Student fethched successfully", data:student})
        }
    } catch (error) {
        
    }
}


let updatestudent = async(req, res, next)=>{
    console.log("id");
    try {
        let {id} = req.params;
        let {fn, age} = req.body;
        console.log(req.body);
        let student = await Student.findById(id)
        console.log(student);
        if(!student){
            res.json({error:true, message:"Student not found based id"})
        }else{
            let student = await Student.findByIdAndUpdate({_id:id},{fn,age},{new:true})
            res.json({error:false, message:"Student updated successfully", data:student})
        }
    } catch (error) {
        next(error)
    }
}


let deleteStudent = async(req, res, next)=>{
    try {
        let {id} = req.params;
        let student = await Student.findById(id)
        if(!student){
            res.json({error:true, message:"Student not found"})
        }else{
            let student = await Student.deleteOne({_id:id})
            res.json({error:false, message:"student deleted successfully", data:student})
        }
    } catch (error) {
     next(error)   
    }
}


module.exports = {
    addStudent, 
    getStudents,
    getStudent,
    updatestudent,
    deleteStudent
}