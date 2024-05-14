const passport = require("passport");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "cse44321l@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

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
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2IzMDViZjQ3ZGZhMDY4ZGNkMTEwYyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNTU0MDkyM30.IarKVLoVks2Br76BLmaEe_sV5H7ctLHYI_-dXJL9LFY";
  return token;
};

exports.sendMail = async function ({ to, subject, text, html }) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"E-commerce 🛒" <cse44321l@gmail.com>', // sender address
    to, // list of receivers
    subject,
    text,
    html,
  });
  return info;
};
