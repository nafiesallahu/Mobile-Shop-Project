const Mobile = require("../models/mobile.model");

module.exports = {
  getMobiles: (req, res) => {
    Mobile.find({})
      .then((mobiles) => {
        res.json(mobiles);
      })
      .catch((err) => {
        console.log("ERROR IN Get all", err);
        res.status(400).json({
          message: "something went wrong in find all mobiles",
          error: err
        });
      });
  },
  getMobileById: (req, res) => {
    Mobile.findOne({ _id: req.params.id })
      .then((mobile) => {
        res.json(mobile);
      })
      .catch((err) => {
        console.log("ERROR IN Get mobile", err);
        res
          .status(400)
          .json({ message: "something went wrong in find mobile", error: err });
      });
  },
  createMobile: (req, res) => {
    Mobile.create(req.body)
      .then((newMobile) => {
        res.status(201).json(newMobile);
      })
      .catch((err) => {
        console.log("ERROR IN create Mobile", err);
        res.status(400).json({
          message: "something went wrong in create Mobile",
          errors: err.errors
        });
      });
  },
  updateMobile: (req, res) => {
    Mobile.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true
    })
      .then((mobile) => {
        res.json(mobile);
      })
      .catch((err) => {
        console.log("ERROR IN update mobile", err);
        // res.status(400).json({
        //   message: "something went wrong in update mobile",
        //   error: err,
        // });
        res.status(400).json({ err });
      });
  },
  deleteMobile: (req, res) => {
    Mobile.deleteOne({ _id: req.params.id })
      .then((mobile) => {
        res.json(mobile);
      })
      .catch((err) => {
        console.log("ERROR IN delete mobile", err);
        res.status(400).json({
          message: "something went wrong in delete mobile",
          error: err
        });
      });
  }
};
