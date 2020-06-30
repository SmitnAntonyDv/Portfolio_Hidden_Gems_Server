const { Router } = require("express");
const router = new Router();

//models
const User = require("../models").user;
const Country = require("../models").country;
const Locationpost = require("../models").locationpost;

//endpoints
router.get("/locations", async (req, res, next) => {
  try {
    const getCountry = await Country.findAll({
      include: [Locationpost],
    });
    if (!getCountry) {
      res.status(404).send("Country not found");
    } else {
      res.status(200).send(getCountry);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/locations/:countryId/posts", async (req, res, next) => {
  try {
    const { countryId } = req.params;
    const getCountry = await Country.findByPk(countryId, {
      include: [Locationpost],
    });
    if (!getCountry) {
      res
        .status(404)
        .send(
          "Sorry the country you have requested does not exist in this database."
        );
    } else {
      res.status(200).send(getCountry);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
