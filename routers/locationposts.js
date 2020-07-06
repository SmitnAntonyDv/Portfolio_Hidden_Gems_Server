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

router.post("/newpost", async (req, res, next) => {
  const {
    title,
    description,
    imageUrl,
    id,
    countryId,
    adress,
    latitude,
    longitude,
  } = req.body;
  if (!title && !description && !imageUrl && !adress) {
    res
      .status(404)
      .send({ message: "Please fill in all fields and try again" });
  }
  try {
    const newPost = await Locationpost.create({
      title,
      description,
      imageUrl,
      adress,
      latitude,
      longitude,
      countryId,
      userId: id,
    });
    res.status(200).send(newPost);
  } catch (error) {
    res.status(404).send({
      messege:
        "Oops! Please fill out all the fields and check the checkbox to upload your amazing post!",
    });
  }
});

module.exports = router;
