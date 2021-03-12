var http = require("http"); //module in node core

http.createServer(function(req,res){
    res.write('Test Server Created') 
    res.end()
}).listen(7000)


//Create Server! - Code by writing callback function as seperate... refer below

// http.createServer(server).listen(7000) //create server call back function

// //req - from where request is coming
// //res - how to respond
// function server(req,res){
//     res.write('Test Server Created') 
//     res.end()
// }


