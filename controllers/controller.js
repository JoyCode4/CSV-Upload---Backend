const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const files = [];

module.exports.home = (req, res) => {
  return res.render("homepage", { msg: null, files });
};

module.exports.upload = (req, res) => {
  if (req.file === undefined) {
    return res.render("homepage", { msg: "Enter valid file", files });
  }
  files.push(req.file);
  return res.redirect("/");
};

module.exports.details = (req, res) => {
  const result = [];
  const { name } = req.params;
  const file = path.join(path.resolve(), "assets", "uploads", name);
  fs.createReadStream(file)
    .pipe(csv())
    .on("data", (data) => result.push(data))
    .on("end", () => {
      return res.render("details", { file: result });
    });
};
