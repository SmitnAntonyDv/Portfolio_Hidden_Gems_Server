const { Router } = require("express");
const router = new Router();

const User = require("../models").user;
const Country = require("../models").country;
const Locationpost = require("../models").locationpost;

router.get("/locationpost/:postId", async (req, res, next) => {
  try {
    const { postId } = req.params;
    const getPost = await Locationpost.findByPk(postId);
    if (!getPost) {
      res.status(400).send("sorry post not found");
    } else {
      res.send(getPost);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
