const express = require("express");


const { loginUser, signupUser, getAllWorkouts } = require("../controllers/userController");

const router = express.Router();

//login

router.post("/login", loginUser);

//sign up

router.post("/signup", signupUser);


router.get("/allworkouts", getAllWorkouts);

module.exports = router;
