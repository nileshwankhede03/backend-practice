const express = require("express")
const path = require("path")
const app = express()
const port = 3000

// setting up parsers for FORM.
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// setting up public static files : css , js and images
app.use(express.static(path.join(__dirname,'public')))
app.set("view ejs","ejs")

app.get("/",function(req,res){
    res.render("index.ejs")
})

app.get("/profile/:username",function(req,res){
    // req.params madhe : cha aadhicha all part astoy
    res.send("chal raha hai")
})

app.get("/Author/:username/:age",function(req,res){
    res.send(`Welcome ${req.params.username} & age is ${req.params.age}`)
})

app.listen(port,function(){
    console.log("its running...")
})