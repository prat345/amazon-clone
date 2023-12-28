import express from "express";
import data from "./data.js";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // convert input form to json

app.get("/", (req, res) => {
  res.json("Hello...");
});

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sandbox");
});

app.use("/api/seed", seedRouter); // http://localhost:5000/api/seed > create sample product in db
app.use("/api/products", productRouter); // http://localhost:5000/api/products
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
