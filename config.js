const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adnan12345:adnan123@blogapp.9sg5w0z.mongodb.net/blogdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  

//   const mongoose = require("mongoose");

// // Replace the following connection string with your MongoDB Atlas connection string
// const atlasConnectionUri = "mongodb+srv://adnan12345:adnan123@blogapp.9sg5w0z.mongodb.net/";

// mongoose.connect(atlasConnectionUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB Atlas");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB Atlas connection error:", err);
// });