const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");


router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/upvote", postRoutes);


module.exports = router;
