const express = require("express");
const morgan = require("morgan");
const app = express();
// connect to mongodb
const dbURI =
  "mongodb+srv://gihozo:test1234567@nodecrashcourse.8tinf.mongodb.net/";
//register view engine
app.set("view engine", "ejs");
app.set("views", "newViews");

app.listen(3000);
const blogs = [];
app.get("/", (request, response) => response.render("index", { blogs }));
app.get("/about", (request, response) => {
  response.render("about");
});
app.use(express.static("assets"));
app.use(morgan("tiny"));
app.get("/about-us", (request, response) => {
  response.redirect("about");
});
app.get("/blogs/create", (request, response) => response.render("create"));
app.use((request, response) => {
  response.status(404).render("404");
});
