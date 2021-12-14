module.exports = {
  host: process.env.mailhost,
  port: process.env.mailport,
  auth: {
    user: process.env.mailuser,
    pass: process.env.mailpass,
  },
};
