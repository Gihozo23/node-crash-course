const express = require("express");
const app = express();
//register view engine
//Listening for requests

app.listen(3000);

//responding to requests

app.get("/", (request, response) => {
  //Without the options object you will get an error say that the path provided has to be an absolute path
  response.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (request, response) => {
  //Without the options object you will get an error say that the path provided has to be an absolute path
  response.sendFile("./views/about.html", { root: __dirname });
});

//redirects

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

//404
//the use method creates middlewares and fire at the middleware function , since it doesn't take a path it will fire for every url
app.use((request, response) => {
  response.status(404).sendFile("./views/404.html");
});
