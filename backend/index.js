const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const MyRouter = require("./routes/myroute.js");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())

app.use("/api",MyRouter);


app.listen(port,()=> console.log("connected to backend"));
