const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const myPath = path.resolve("content", "index.html");
const result = fs.readFileSync(myPath, "utf-8");
require("dotenv").config()
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});

const mailOptions = {
    from: "zmedini16@gmail.com",
    to: "ziedmedini95@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That's first email test  !",
    html: "<h1>wow that was easy</h1>"
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});