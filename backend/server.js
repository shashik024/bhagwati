import express from "express";
import data from "./data.js"; // we have to put js at then end of file
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

//by calling app.listen server starts and ready to respond to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
