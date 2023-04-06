const authAdmin = function (req, res, next) {
  if (req.session.loggedUser?.idUserCategory !== 0) {
    return res.redirect("/");
  }
  next();
};

module.exports = authAdmin;
