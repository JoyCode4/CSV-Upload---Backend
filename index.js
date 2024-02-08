const express = require("express");
const path = require("path");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
