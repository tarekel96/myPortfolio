//server.js
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
const router = require("./api");
const bodyParser = require("body-parser"); // Parses incoming request bodies in a middleware before your handlers, available under the req.body property.

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));

// enables bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// express serves the public folder as static
app.use(express.static("public"));

// testing with Postman
app.get("/portfolio", (req, res) => {
  res.json({
    test: "the route has hit"
  });
});

app.use("/api", router);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.listen(port, () => {
  console.log(`The API server is now running on ${port}`);
});
