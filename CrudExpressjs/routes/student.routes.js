// let express = require("express")
// let {addStudent, 
//     getStudent, 
//     getStudents, 
//     updateStudents, 
//     deleteStudent} = require("../controller/student.controller")

// let router = express.Router()

// router.post("/addstudent", addStudent)
// router.get("/getstudents", getStudents)
// router.get("/getsinglestudent/:id", getStudent)
// router.put("/updatestudent/:id", updateStudents)
// router.delete("/deletestudent/:id", deleteStudent)
// module.exports = router;


let express = require("express")
let {
    addStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updatestudent
} = require("../controller/student.controller")


let router = express.Router()
router.post("/addStudent", addStudent)
router.get("/getStudents", getStudents)
router.get("/getSingleStudent/:id", getStudent)
router.put("/updateStudent/:id", updatestudent)
router.delete("/deleteStudent/:id", deleteStudent)
module.exports = router