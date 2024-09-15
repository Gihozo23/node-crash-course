const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((request, response) => {
    console.log("request made") 
    console.log(request.url, request.method);

    //BASIC ROUTING
    response.setHeader("Content-Type", "text/html")
    let path = "./views/"; 
    switch (request.url) {
        
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        //redirecting from a previous changed page to the new page
        case "/about-me":
            response.statusCode = 301;
            response.setHeader("Location", "/about")
            response.end();
        default:
            path += "404.html";

    }
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        }
        else response.end(data);
    })
    // response.end();
}) 
server.listen(3000, "localhost", () => { console.log("listening to the request") })