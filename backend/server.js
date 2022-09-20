import express from "express";
import data from "./data.js"; // we have to put js at then end of file
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;

//by calling app.listen server starts and ready to respond to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
