const express=require("express")
const app =express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(4000, function(){
    console.log("server is running on port 4000")
})

app.use(express.static('website'));

app.get("/all", function(req,res){
    res.render("../test.html")
})
