//import express : to simply import http method
const express = require("express")
const fs = require("fs")
//run app with express and app is in port 
const app = express()
const port = 17000

function printTime(){
	
}

app.get("/",function(req,res){
	fs.readFile("./static/templates/index.html", function(err,data){
		if(err){
			console.log("Error loading html file")
			throw err
		}
		res.send(data.toString())
		printTime()
	})

})

app.listen(port,() => console.log('server running on %d',port))
