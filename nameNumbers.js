import express, { json } from "express";
import extenso from "extenso";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();

const host = process.env.HOST || "localhost";

app.use(json());

app.get("/", (req, res) => {
  res.send("Number to their name");
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${process.env.PORT}`);
});
