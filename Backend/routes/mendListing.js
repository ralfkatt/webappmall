var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const MendListing = require("../models/mendListingModel");
const auth = require("../middleware/auth");

/* GET users listing. */
router.get("/", auth, async (req, res) => {
  var mendListing = await MendListing.find({ user: req.user._id });
  console.log(req.user);
  console.log(mendListing);
  res.json(mendListing);
});

router.post(
  "/",
  [
    body("title", "Invalid input").trim().escape().isLength({
      min: 1,
    }),
    body("desc", "Invalid input").trim().escape().isLength({
      min: 1,
    }),
  ],
  auth,
  async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      // Error messages can be returned in an array using `errors.array()`.
      console.log("Found validation errors");
      return res.status(422).json({
        errors: errors.array(),
      });
    } else {
      // Data from form is valid. Store in database
      console.log(req.body);
      const form = req.body;
      console.log(req.user._id);
      var user = await User.findById(req.user._id);
      try {
        const newMendListing = new MendListing({
          user: user._id,
          title: form.title,
          desc: form.desc,
        });
        await newMendListing.save();
        res.json(newMendListing);
        console.log("Report posted to DB");
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
      }
    }
  }
);

module.exports = router;
