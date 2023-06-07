import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import DBConnection from "./database/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const options = {
  origin: ["http://localhost:3000", "https://share-help.vercel.app"],
  useSuccessStatus: 200,
};
app.use(cors(options));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", router);

cloudinary.v2.config({
  cloud_name: "cloudinary",
  api_key: "key",
  api_secret: "secret",
});

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
