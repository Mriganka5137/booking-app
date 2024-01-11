import mongoose from "mongoose";

let isConnected = false;
const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB_URL not found");
  }
  if (isConnected) {
    return console.log("MONGODB is already connected");
  }
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    isConnected = true;
    console.log(
      `\nMongoDB is connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB not connected");
    process.exit(1);
  }
};
export default connectToDatabase;
