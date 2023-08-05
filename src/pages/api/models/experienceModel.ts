import mongoose from "mongoose";

type experienceModelProps = {
  image: string;
  title: string;
  description: string[];
  start_from: Date;
  end_from: Date;
};

const database = mongoose.connection.useDb("fatihmuhamadridho");
const experienceSchema = new mongoose.Schema<experienceModelProps>(
  {
    image: String,
    title: String,
    description: [String],
    start_from: Date,
    end_from: Date,
  },
  { timestamps: true }
);
const experienceModel = database.model<experienceModelProps>("test", experienceSchema);
export { experienceModel };
