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
    var transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: auth
      });
      console.dir(auth);
      var mailOptions = {
        to: 'apolloman3@gmail.com',
        from: 'support@mail.sunbrookfarm.com',
        subject: '✔ Reset your password on Mega Boilerplate',
        text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n'
      };
      transporter.sendMail(mailOptions, function(err) {
          console.log('sent mail');
          console.dir(err);
        req.flash('info', { msg: 'An email has been sent to ' + mailOptions.to + ' with further instructions.' });
        res.redirect('/');
      });

  
};
