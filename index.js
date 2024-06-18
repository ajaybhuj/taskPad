const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pt = path.join(__dirname, "public");
app.use(express.static(pt));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    if (err) {
      return res.status(500).send("Unable to scan directory");
    }
    res.render("index", { files: files });
  });
});

app.post("/create", function (req, res) {
  const filename = req.body.title.split(" ").join("") + ".txt";
  fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
    if (err) {
      return res.status(500).send("Unable to create file");
    }
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
