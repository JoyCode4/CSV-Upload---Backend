const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const CSV = require("../model/csv");

module.exports.home = async (req, res) => {
  const files = await CSV.find({});
  return res.render("homepage", { msg: null, files });
};

module.exports.upload = async (req, res) => {
  if (req.file === undefined) {
    return res.render("homepage", { msg: "Enter valid file" });
  }
  const file = await CSV.create({
    name: req.file.originalname,
    fileName: req.file.filename,
  });
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
