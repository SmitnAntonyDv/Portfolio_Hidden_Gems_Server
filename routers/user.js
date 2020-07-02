const { Router } = require("express");
const router = new Router();

const User = require("../models").user;
const Locationpost = require("../models").locationpost;

router.get("/user", async (req, res, next) => {
  try {
    const user = await User.findAll();
    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.status(200).send(user);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
