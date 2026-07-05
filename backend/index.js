const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.get("/home",(req,res)=>{
    return res.send("home page!");
})

app.listen(port,()=> console.log("connected to backend"));
