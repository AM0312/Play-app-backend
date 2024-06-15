import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB();

// // Connect to MongoDB.
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error", error);
//   }
// })();
