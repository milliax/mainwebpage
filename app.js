//import express : to simply import http method
const express = require("express")
const fs = require("fs")
//run app with express and app is in port 
const app = express()
const port = 17000

function printInfo(ip){
	console.log(Date())
	console.log(ip)
}

app.get("/",function(req,res){
	fs.readFile("./static/templates/index.html", function(err,data){
		if(err){
			console.log("Error loading html file")
			throw err
		}
		res.send(data.toString())
		var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
		printInfo(ip)
	})

})

app.listen(port,() => console.log('server running on %d',port))
