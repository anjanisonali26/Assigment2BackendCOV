const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost/Assigment2Anjani", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind("connection error"));
  db.once("open", () => {
    console.log("connection Ok");
  });
};


