const nodemailer = require("nodemailer");
const config = require("./config");

let transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  auth: {
    user: config.auth.user,
    pass: config.auth.pass,
  },
});

const sendMail = (data) => {
  transporter.sendMail(data, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendMail;
