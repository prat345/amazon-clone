import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.error(err.message);
  });

const app = express();

app.use("/api/seed", seedRouter); // http://localhost:5000/api/seed
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
