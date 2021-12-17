const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

let transporter;
let messageData;

process.on("beforeExit", (code) => {
  fs.readFileSync(path.join(__dirname, "time.txt"), function (err, buf) {
    console.log(buf.toString());

    let date = new Date();

    let lastDate = new Date(buf.toString());

    var diffMs = date - lastDate;

    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    if (diffMins > 30) {
      transporter.sendMail(messageData, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    }
  });
});

const createMailService = (data) => {
  // data createService consists
  // service: 'SendPulse', // service name
  //    auth: {
  //        user: 'account.email@example.com', // username
  //        pass: 'smtp-password' // password
  //    }

  // data messageData consists
  // from, to, cc, bcc, subject, text, html, attachments
  let service = data.createService;
  messageData = data.messageData;
  transporter = nodemailer.createTransport(service);
};

module.exports = createMailService;
