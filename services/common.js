const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // TODO: this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2IzMDViZjQ3ZGZhMDY4ZGNkMTEwYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1MTU1MDM1fQ.usVRS3ilJ5yvNxo8_AXkZschtM7MgJXqSxeKDIr9j4U";
  return token;
};
