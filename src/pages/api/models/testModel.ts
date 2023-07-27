import mongoose from "mongoose";

const database = mongoose.connection.useDb("fatihmuhamadridho");

const testSchema = new mongoose.Schema({
  name: String
});
const testModel = database.model("test", testSchema);

export { testModel };