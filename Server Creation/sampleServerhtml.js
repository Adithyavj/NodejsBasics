var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    //console.log(q.pathname)

    if (q.pathname === "/") {
      //req.url is used to check if it is host or route
      fs.readFile("sample.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signup") {
      fs.readFile("signup.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signupaction") {
      //console.log(q.query); //calling query as JSON
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>First Name: " + q.query.fname + "</h1>");
      res.write("<h1>Last Name: " + q.query.lname + "</h1>");
      res.write("<h1>Mobile: " + q.query.mobile + "</h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Error");
      res.end();
    }
  })
  .listen(7000, () => console.log("Server Started..."));
