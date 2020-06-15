const User = require("../models/User");

exports.register = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(400).json({ data: err });

    return res.status(200).json({ data: user });
  });
};
