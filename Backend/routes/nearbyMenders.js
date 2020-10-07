var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

//Find nearby menders based on location
router.get("/", async function (req, res, next) {
  const long = req.query.long;
  const lat = req.query.lat;
  User.aggregate(
    [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [-73.99279, 40.719296],
          },
          distanceField: "dist.calculated",
          maxDistance: 2,
          spherical: true,
        },
      },
    ],
    (err, data) => {
      if (err) {
        next(err);
        return;
      }

      res.send(data);
    }
  );
});
module.exports = router;
