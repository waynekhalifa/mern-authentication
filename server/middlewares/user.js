const User = require("../models/user");

exports.auth = (req, res, next) => {
  const token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;

    if (!user) return res.json({ data: { isAuth: false } });

    req.token = token;
    req.user = user;
    next();
  });
};
