const jwt = require("jsonwebtoken");
const User = require("../model/user");

const authentication = async (req, res, next) => {

  const excludedRoutes = ['/api/workouts/allworkouts', '/api/workouts/hello'];

  if (excludedRoutes.includes(req.path)) {
    return next(); // Skip authentication for these routes
  }


  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required." });
  }

  const token = authorization.split(" ")[1];

  // console.log(token);

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = authentication;
