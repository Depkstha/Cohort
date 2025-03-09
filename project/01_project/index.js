import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//goes command to express
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); //to tell server to accept json
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
//most used port: 4000, 5000, 3000, 5173, 443, 80 by other application

app.get("/", (req, res) => {
  res.send("Cohort!");
});

app.get("/dharma", (req, res) => {
  res.send("Dharma");
});

app.get("/hitesh", (req, res) => {
  res.send("Hitesh");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
