const express = require("express");
const authentication = require("../middleware/authentication");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  getAllWorkouts
} = require("../controllers/workoutController");

const router = express.Router();

router.use(authentication);

//require for all workout routes
router.get("/", getWorkouts);

router.get("/allworkouts", getAllWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

router.get("/hello", (req, res) => {
  res.send("Hello World!!!");
});

module.exports = router;
