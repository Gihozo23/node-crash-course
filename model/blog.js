const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BloqSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//this model show have the same name as your collection but in singular, because the model method's first argument is the actual name
const Bloq = mongoose.model("bloq", BloqSchema);
module.exports = Bloq;
