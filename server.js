const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.DEV_PORT || 5000;
const Cors = require("cors");
const Mongoose = require("mongoose");
const DBConnectionString = process.env.DB || "mongodb+srv://RodyRealEstateDBAdmin:sOuuMPog5FnAE3Vl@rodyrealestatedb.injgmeo.mongodb.net/?retryWrites=true&w=majority&appName=RodyRealEstateDB";
const signup = require("./Authentication_and_authorization/signup");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(Cors());

Mongoose.connect(DBConnectionString).then(()=>{
    console.log("connection successful!");
}).catch((err)=>{
    console.log(err.message);
});

app.use("/registration",signup);

app.get("/",(req,res,next)=>{
    res.send(JSON.stringify(DBConnectionString));
    console.log(port);
    
});


app.listen(port,()=>{
    console.log("Listening on http://www.localhost:"+port);
});