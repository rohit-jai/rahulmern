const express = require('express')
//var bodyParser = require('body-parser')
const apirouter = require('./routes/api')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/rohit'
const app = express()
app.use(express.json());
rajan
port = process.env.port || 9000
//app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//app.use(bodyParser.json())
mongoose.connect(url).then((res)=>{
    console.log('database is connected');
}).catch((err)=>{
    console.log('data base is not connected ');
})
apirouter(app)

app.listen(port,()=>{
    console.log(`server is runing on the port ${port}`);
})