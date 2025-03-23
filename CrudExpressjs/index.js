// let express = require("express")
// let studentRoutes = require("./routes/student.routes")
// let connectDataBase = require("./db/connectDb")
// require("dotenv").config()
// let app = express()
// app.use(express.json())
// app.use("/api/students", studentRoutes)
// app.use("*", (req, res)=>{
//     res.json({error:true, message:"page not found"})
// })
// app.use((err,req, res,next)=>{
//     res.json({error:true, message:err})

// })


// let startServer = async()=>{
//     try {
//         await connectDataBase(process.env.PORT)
//         console.log("mongodb connected successfully");
//         app.listen(4500, (err)=>{
//             console.log("server is running at port : http://localhost:4500");
//         })
        
//     } catch (error) {
//       console.log(error);
//     }

// }
// startServer()

let express = require('express')
let studentRoutes = require('./routes/student.routes')
let connectDataBase = require("./db/connectDb")
require("dotenv").config()
let app = express()

// ADD THIS
var cors = require('cors');
// console.log(cors);
app.use(cors(
    {
      origin:["http://localhost:4500"],
      methods:["POST", "GET", "PUT", "DELETE"],
      allowedHeaders: 'Content-Type,Authorization',
      credentials:true
    }
));
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Server deployed and running on vercel.");
  });
app.use('/api/students', studentRoutes)

app.use("*", (req, res)=>{
    res.json({error:true, message:"page not found"})
})


app.use((err, req, res, next)=>{
res.json({error:true, message:err})
})

let startServer = async()=>{
    try {
        await connectDataBase(process.env.PORT)
        console.log("mongoDB connected successfully");
        app.listen(4500, (err)=>{
console.log("server is running at port : http://localhost:4500");
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()
