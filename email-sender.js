
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'm.aiissatoudiallo@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'dieynadiallo1508@gmail.com',
  to: 'm.aiissatoudiallo@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! This is a test.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
