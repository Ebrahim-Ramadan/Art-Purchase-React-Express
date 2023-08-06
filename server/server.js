require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// config Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass:  process.env.EMAIL_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { toEmail, imgData } = req.body;
  const mailOptions = {
    from: 'ramadanebrahim791@gmail.com',
    to: toEmail,
    subject: 'Art Purchase Message | Confirm + Delivery',
    html: `
    <strong>
    <p>Hello, This is <a href='https://github.com/Ebrahim-Ramadan'>Ebrahim Ramadan</a> contacting for art delivery, have a good day <3</p>
    <p>Title: ${imgData.title}</p>
    <img src="${imgData.url}" alt="Purchased Image" />
    <p>Description: ${imgData.description}</p>
    <p>id of ${imgData.id}</p>
    </strong>
    <p style="opacity:0.5">Ebrahim Ramadan
    <br/>
    Egypt Japan University for Science and Technology | CS26 
    <br/>
    Software Engineer / Full-Stack Developer
    <p>

  `,
  };
console.log(req.body);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
