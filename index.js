const express = require("express");
const path = require("path");
const PORT = 8080;
const app = express();

app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
