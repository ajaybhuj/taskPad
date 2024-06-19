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
app.get("/files/:fileName", function (req, res) {
  fs.readFile(
    `./files/${req.params.fileName}`,
    "utf-8",
    function (err, fileData) {
      console.log(fileData);
      res.render("show", {
        fileName: req.params.fileName,
        fileData: fileData,
      });
    }
  );
});
app.get("/edit/:fileName", function (req, res) {
  res.render("edit", { fileName: req.params.fileName });
});
app.post("/edit", function (req, res) {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    }
  );
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
