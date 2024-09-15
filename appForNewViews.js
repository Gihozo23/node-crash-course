const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./model/blog");
const express = require("express");
const Bloq = require("./model/blog");

const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://gihozo:test1234567@nodecrashcourse.8tinf.mongodb.net/";
//register view engine
mongoose
  .connect(dbURI)
  .then((data) => console.log("connected to the db"))
  .catch((error) => console.error(error));
app.set("view engine", "ejs");
app.set("views", "newViews");

app.listen(3000);
const blogs = [];

//Middlewares and static files
app.use(express.static("assets"));
//takes all the url-encoded data that comes along and passes it to an object that we can use in the request body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (request, response) => {
  //we have stopped hard coding the data into the index rather let's do it else where
  response.redirect("/blogs");
  //   const blogs = [
  //     {
  //       title: "University experience",
  //       body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  // molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  // numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  // optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  // obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  // nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  // tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  // quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
  // sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  // recusandae alias error harum maxime adipisci amet laborum.`,
  //       snippet:
  //         "fjaoiejfaniovioajrpvoineriovnieojvporejvnnriovenvioenrvjnriovanevenopvnvioervnirnvioernvoirnviawepojrnvoiernbioernvoierbioenrbionrvneiorn",
  //     },
  //     {
  //       title: "Corporate experience",
  //       body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  // molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  // numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  // optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  // obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  // nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  // tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  // quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
  // sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
  // recusandae alias error harum maxime adipisci amet laborum.`,
  //       snippet:
  //         "fjaoiejfaniovioajrpvoineriovnieojvporejvnnriovenvioenrvjnriovanevenopvnvioervnirnvioernvoirnviawepojrnvoiernbioernvoierbioenrbionrvneiorn",
  //     },
  //   ];
  // response.render("index", { blogs });
});
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/about-us", (request, response) => {
  response.redirect("about");
});

// blog routes
app.get("/blogs", (request, response) => {
  Blog.find()
    .then((result) => {
      response.render("index", { title: "All blogs", blogs: result });
    })
    .catch((error) => console.error(error));
});
app.post("/blogs", (request, response) => {
  const newBlog = new Blog(request.body);
  newBlog
    .save()
    .then((result) => response.redirect("/blogs"))
    .catch((error) => console.error(error));
});
app.get("/blogs/create", (request, response) =>
  response.render("create", { title: "Create Blog" })
);
app.get("/blogs/:id", (request, response) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((result) => {
      response.render("details", { title: "blog details", blog: result });
    })
    .catch((error) => response.render("404"));
});
app.delete("/blogs/:id", (request, response) => {
  const id = request.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      response.json({ redirect: "/blogs" });
    })
    .catch((error) => console.error(error));
});
app.use((request, response) => {
  response.status(404).render("404");
});
