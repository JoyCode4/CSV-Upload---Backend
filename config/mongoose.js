const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url);
  console.log("DB is connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
