const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect("mongodb+srv://pavanpnaik321:pavan21p@cluster0.7mtwvyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to database successfully");
  } catch (error) {
    console.log("could not connect to database");
  }
};