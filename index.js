const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Get request")
})

app.get('/about',(req,res)=>{
    res.send("About get req")
})
app.get('/contact',(req,res)=>{
    res.send(`Call me at ${process.env.PHONE_NUMBER}`)
})

app.post('/',(req,res)=>{
    res.send("Post request")
})

app.listen(PORT,()=>{
    console.log("Server on port ",PORT)
})