var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

/**
 * GET /test
 */
exports.testGet = function(req, res) {
  res.render('test', {
    title: 'Test abc'
  });
};

/**
 * POST /test
 */
exports.testPost = function(req, res) {
    var auth = {
            user:process.env.MAILGUN_USERNAME,
            pass:process.env.MAILGUN_PASSWORD,
        };
};
