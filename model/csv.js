const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uploadOn: {
    type: String,
    default: new Date().toDateString(),
  },
  fileName: {
    type: String,
    required: true,
  },
});

const CSV = mongoose.model("CSV", csvSchema);

module.exports = CSV;
