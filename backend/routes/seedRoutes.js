import express from "express";
import Product from "../model/productModel.js";
import data from "../data.js";
import User from "../model/userModel.js";

// send req @ http://localhost:5000/api/seed
// to create sample products
const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  // root > /api/seed
  // every req > clear collection  > new ids
  await Product.deleteMany({});
  const createProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createUsers = await User.insertMany(data.users);
  res.send({ createProducts, createUsers });
});

export default seedRouter;
