const PASS = 'jqii ugdj kirp gsqe';
const nodemailer = require("nodemailer");
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "shreyakurry23@gmail.com",
    pass: PASS,
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
    const info = await transporter.sendMail({
      from: '<shreyakurry23@gmail.com>',
      to: "shailajachoudhary236@gmail.com",
      subject: "Shreya's Email",
      text: "Hello World?", // plain‑text body
      html: "<b>Helloooooooooooooo, how do you do????</b>", // HTML body
    });
  
    console.log("Message sent:", info.messageId);
  })();