const User = require("../models/user");

module.exports = {
  getUser: (req, res) => {
    !req.query.id
      ? User.find()
          .then((allUsers) => res.send(allUsers))
          .catch((err) => res.send(err))
      : User.findById(req.query.id)
          .then((user) => res.send(user))
          .catch((err) => res.send(err));
  },

  newUser: async (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((newUser) => res.send(newUser))
      .catch((err) => res.send(err));
  },

  deleteUser: async (req, res) => {
    User.findById(req.query.id)
      .then((foundUser) => {
        foundUser.remove();
        res.send({ msg: "success" });
      })
      .catch((err) => res.send(err));
  },
};
