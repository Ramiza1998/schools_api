const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB")
const userRoutes = require("./routes/userRoutes")


const app = express();

connectDB();

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRoutes)

//home route
app.get("/", (req, res)=>{
    res.json("<h1>WELCOME TO OUR SCHOOL API</hi>")
})

const PORT =  process.env.PORT||6000

app.listen(PORT, ()=>{
    console.log("sever is active")
})









