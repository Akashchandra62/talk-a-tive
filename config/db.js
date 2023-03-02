import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to dataBase successfully`);
  } catch (error) {
    console.log(`Error in connecting to Db ${error.message}`);
    process.exit();
  }
};

export default connectDB;
