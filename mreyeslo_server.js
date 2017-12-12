// initlize packages
var express = require("express");
var app =express();
//for input
var bodyParser = require("body-parser")
var request = require("request");

app.use( express.static( "public" ) );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");


////////////////////////////////////////////////////////////////

// get to root file
app.get("/", function(req, res){
    var house = req.params.customhouse; 
     console.log(house)
    res.render("home.ejs")
   
});
//request to projects page
app.get("/projects", function(req, res){
    res.render("projects.ejs")
});

//request to about page
app.get("/contact", function(req, res){
    res.render("contact.ejs")
});

//request to unkonwn page
app.get("*", function(req, res){
    res.send("no touchy");
});

////////////////////////////////////////////////////////////////
//POST
//post to add contact 
app.post("/addContact",
function(req,res){
    var newContact = req.body.newcontact;
    contacts.push(newContact);
    res.redirect("/contact");
}
);

////////////////////////////////////////////////////////////////
//initlize server
app.listen("6000", "0.0.0.0",function(){
    console.log("Server has started")
});