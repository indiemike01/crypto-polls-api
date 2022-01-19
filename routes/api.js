const express = require("express");
const router = express.Router();
const Poll = require("../models/poll");

// get a list of polls from the database
router.get("/polls", function (req, res, next) {
  Poll.find({})
    .then(function (polls) {
      res.send(polls);
    })
    .catch(next);
});

// add a new polls to database
router.post("/polls", function (req, res, next) {
  Poll.create(req.body)
    .then(function (poll) {
      res.send(poll);
    })
    .catch(next);
});

// update a poll in the database
router.put("/polls/:id", function (req, res, next) {
  Poll.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (Poll) {
    Poll.findOne({ _id: req.params.id }).then(function (poll) {
      res.send(poll);
    });
  });
});

// delete a poll in the database
router.delete("/polls/:id", function (req, res, next) {
  Poll.findOneAndDelete({ _id: req.params.id }).then(function (poll) {
    res.send(poll);
  });
});

module.exports = router;
