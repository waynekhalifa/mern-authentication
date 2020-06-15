const User = require("../models/User");

exports.register = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(400).json({ data: err });

    return res.status(200).json({ data: user });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(400).json({ data: err });

    if (!user)
      return res.json({
        data: {
          loginSuccess: false,
          message: "Email not found.",
        },
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          data: {
            loginSuccess: false,
            message: "Invalid password.",
          },
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).json({ data: err });

        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            data: {
              loginSuccess: true,
            },
          });
      });
    });
  });
};
