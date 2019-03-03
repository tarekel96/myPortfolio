const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.json({
    api: "Api router hit"
  });
});

// test if can get form data from React front-end
router.post("/form", (req, res) => {
  // used to test if received the form info in the req body from React via axios post request
  console.log(req.body);

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "caterina.price@ethereal.email", // generated ethereal user
        pass: "hRsAWGrgvcWvh8Ky2Q" // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: `${req.body.email}`, // sender address
      to: "caterina.price@ethereal.email", // list of receivers
      subject: `${req.body.subject}`, // Subject line
      text: `${req.body.message}`, // plain text body
      html: `<h2>Hello Tarek, </h2><p>${
        req.body.message
      }</p> <h3>From:  <span>${req.body.name}</span></h3> 
     
      <h3>Email: <span>${req.body.email}</span></h3> ` // html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

module.exports = router;
