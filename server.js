const express=require("express")
const app =express()
app.listen(4001, function(){
    console.log("server is running on port 4000")
})
app.use(express.static('website'));
app.get("/get", function(req,res){
    res.render("../test.html")
})