import mongoose from "mongoose";

const mongooseMiddleware = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process?.env?.NEXT_PUBLIC_MONGODB!);
    await mongoose.connection
      .once("open", () => {
        console.log("Databse connected Succesfully");
      })
      .on("error", (error: any) => {
        console.log(error.stack);
      });
  }
};

export { mongooseMiddleware };
