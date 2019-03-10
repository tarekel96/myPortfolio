const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const user_name = process.env.USER_NAME;
const refresh_token = process.env.REFRESH_TOKEN;
const access_token = process.env.ACCESS_TOKEN;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const email_to = process.env.EMAIL_TO;
console.log(process.env.USER_NAME);
// const user_name = "tecoding@gmail.com";
// const refresh_token = "1/1jVFOtlvs8eFGP3deonh3H8UBYdywh6KCNIVs41XmL0";
// const access_token =
//   "ya29.GlvHBrgjoKvs2_co9xCy0X0PnzfoU4ki6VHjPAiPXsbXZ4P7XKTT9rBEyXYfytoCylUQkNM-NCOQDfEsxx-PJuV5Nspl7dA05r-BUEy1uepva3kfPlnMRn9PHMFD";
// const client_id =
//   "377055266653-40r4ouldp9a5stbk1p9sc5q071v50h09.apps.googleusercontent.com";
// const client_secret = "ajAA7iqBJ8I6CYG9WTcvy1zY";

// const email_to = "tarekel96@gmail.com";

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
      service: "Gmail",
      auth: {
        type: "OAuth2",
        clientId: client_id,
        clientSecret: client_secret
      }
    });

    transporter.on("token", token => {
      console.log("A new access token was generated");
      console.log("User: %s", token.user);
      console.log("Access Token: %s", token.accessToken);
      console.log("Expires: %s", new Date(token.expires));
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: user_name, // sender address
      to: email_to, // list of receivers
      subject: `${req.body.subject}`, // Subject line
      text: `${req.body.message}`, // plain text body
      html: `<h2>Hello Tarek, </h2><p>${
        req.body.message
      }</p> <h3>From:  <span>${req.body.name}</span></h3> 
     
      <h3>Email: <span>${req.body.email}</span></h3> `, // html body

      auth: {
        user: user_name,
        refreshToken: refresh_token,
        accessToken: access_token
        // expires      : 1494388182480
      }
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
