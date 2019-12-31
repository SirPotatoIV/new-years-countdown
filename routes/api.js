const path = require("path")

module.exports = function(app){
    app.post("/api/time", function(req, res){
        res.json("hello from the back")
    })
}