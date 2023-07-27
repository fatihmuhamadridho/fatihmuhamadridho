import mongoose, { Document } from "mongoose";

interface portofolioModelProps extends Document {
  title: string;
  description: string;
  skills: Array<string>;
}

const database = mongoose.connection.useDb("fatihmuhamadridho");
const portofolioSchema = new mongoose.Schema<portofolioModelProps>(
  {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    skills: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true}
);
const portofolioModel = database.model<portofolioModelProps>("portofolio", portofolioSchema);
export { portofolioModel };
