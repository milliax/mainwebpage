//import express : to simply import http method
const express = require("express")

//run app with express and app is in port 
const app = express()
const port = 17000

app.get("/",function(req,res){
	res.send("Hello World")
	console.log("respond")
})

app.listen(port,() => console.log('server running on %d',port))
