var http = require("http"); //module in node core

http.createServer(server).listen(7000) //create server call back function

//req - from where request is coming
//res - how to respond
function server(req,res){
    res.write('Test Server Created') 
    res.end()
}
