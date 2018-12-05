const nodemailer = require('nodemailer');

const user = process.env.SmtpUsername;
const pass = process.env.SmtpPassword;
const host = process.env.SmtpHost;
const port = process.env.SmtpPort;
const transporter = nodemailer.createTransport(`smtp://${user}:${pass}@${host}:${port}`);

const { EmailTemplate } = require('email-templates-v2');
const path = require('path');


// https://github.com/leemunroe/responsive-html-email-template
const sendMail = (to, templateName, data) => {
  const templateDir = path.join(__dirname, '../templates', templateName);
  const template = new EmailTemplate(templateDir);
  template.render(data, (err, result) => {
    const { html, subject, text } = result;
    const mailOptions = {
      from: `${process.env.DefaultFrom}`,
      to,
      replyTo: process.env.DefaultReplyTo,
      subject,
      text,
      html,
    };

    transporter.sendMail(mailOptions, (mailSendErr, info) => {
      if (mailSendErr) {
        console.log(mailSendErr);
      }
    });
  });
};

module.exports = {
  sendMail,
};

