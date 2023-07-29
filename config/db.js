import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.gray
    );
  } catch (err) {
    console.log(`Error in MongoDb ${err}`.bgRed.white);
  }
};
export default connectDB;
