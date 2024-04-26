require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("PATH:", req.path, "Method:", req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected: Server is running at port ${port}...`);
    });
  })
  .catch((err) => console.log(err));
