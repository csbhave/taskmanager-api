const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/taskmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
//     useFindAndModify: false,
  })
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));

module.exports = mongoose;
