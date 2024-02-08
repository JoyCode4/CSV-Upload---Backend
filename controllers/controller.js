const files = [];

module.exports.home = (req, res) => {
  return res.render("homepage", { msg: null, files });
};

module.exports.upload = (req, res) => {
  if (req.file === undefined) {
    return res.render("homepage", { msg: "Enter valid file", files });
  }
  return res.redirect("/");
};
