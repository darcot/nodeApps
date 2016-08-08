'use strict';

var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(ses({
    accessKeyId: 'XXXX',
    secretAccessKey: "XXXX"
}));


/** Simple Email */
transporter.sendMail({
    from: 'sivaram.aptech@gmail.com',
    to: 'sivaram.nyayapati@gmail.com',
    subject: 'My Amazon SES Simple Email',
    text: 'Amazon SES is cool'
  });

// /** Email with CC and BCC. */
// transporter.sendMail({
//     from: 'noreply@youremail.com',
//     to: 'destination@youremail.com',
//     subject: 'My Amazon SES Email with CC and BCC',
//     text: 'Amazon SES CC and BCC is cool',
//     cc: 'superganteng@yopmail.com, supertampan@yopmail.com',
//     bcc: 'rampok@yopmail.com'
//   });
// 
// /** Email with Attachment */
// transporter.sendMail({
//   from: 'noreply@youremail.com',
//   to: 'destination@youremail.com',
//   subject: 'My Amazon SES Email with Attachment',
//   text: 'Amazon SES Attachment is cool',
//   attachments: [
//     {
//       filename: 'My Cool Document',
//       path: 'https://path/to/cool-document.docx',
//       contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//     }
//   ]
// });