const nodemailer = require("nodemailer");
const config = require("./config");
const fs = require("fs");

let transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  auth: {
    user: config.auth.user,
    pass: config.auth.pass,
  },
});

process.on("beforeExit", (code) => {
  let date = new Date();

  fs.readFileSync("time.txt", function (err, buf) {
    console.log(buf.toString());
  });

  // Can make asynchronous calls
  setTimeout(() => {
    console.log(`Process will exit with code: ${code}`);
    process.exit(code);
  }, 100);
});

const sendMail = (data) => {
  fs.readFileSync("time.txt", function (err, buf) {
    console.log(buf.toString());
  });

  transporter.sendMail(data, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendMail;
