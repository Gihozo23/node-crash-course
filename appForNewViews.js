const express = require("express");
const app = express();
//register view engine
app.set("view engine", "ejs");
app.set("views", "newViews");

app.listen(3000);
app.get("/", (request, response) => response.render("index"));
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/about-us", (request, response) => {
  response.redirect("about");
});
app.get("/blogs/create", (request, response) => response.render("create"));
app.use((request, response) => {
  response.status(404).render("404");
});
