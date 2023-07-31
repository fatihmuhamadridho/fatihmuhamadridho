import mongoose from "mongoose";

type testModelProps = {
  name: string;
}

const database = mongoose.connection.useDb("fatihmuhamadridho");
const testSchema = new mongoose.Schema<testModelProps>(
  {
    name: String
  },
  { timestamps: true }
);
const testModel = database.model<testModelProps>("test", testSchema);
export { testModel };