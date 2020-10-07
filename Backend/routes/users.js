var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

/* GET users listing. */
router.get("/current", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

// Create user for the first time
router.post(
  "/",
  [
    body("name", "Invalid input").trim().escape().isLength({
      min: 1,
    }),
  ],
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
      //find an existing user
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).send("User already registered.");

      try {
        const newUser = new User({
          name: form.name,
          email: form.email,
          password: form.password,
          //location: form.location,
        });
        newUser.password = await bcrypt.hash(newUser.password, 10);

        await newUser.save();
        const token = newUser.generateAuthToken();
        res.cookie("x-auth-token", token).send({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        });
        //res.json(form);
        console.log("User posted to DB");
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
      }
    }
  }
);

// Login user
router.post("/login", async (req, res) => {
  try {
    //const user = await User.checkUser(req.body.email, req.body.password);
    const user = await User.findOne({ email: req.body.email });
    console.log("innan match");

    //const match = bcrypt.compare(req.body.passsword, user.passsword);
    match = user.comparePassword(user, req.body.password);
    if (match) {
      const token = user.generateAuthToken();

      let options = {
        path: "/",
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
        httpOnly: true, // The cookie only accessible by the web server
      };

      res.cookie("x-auth-token", token).send({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.send("login failed");
    }
  } catch (e) {
    res.send("login failed");
  }
});
router.get("/logout", function (req, res) {
  res.clearCookie("x-auth-token").end();
});
module.exports = router;
