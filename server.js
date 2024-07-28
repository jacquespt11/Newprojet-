const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tshibangup55@gmail.com', // Remplace par ton adresse e-mail
      pass: 'obon usjk odwy kmwt'  // Remplace par ton mot de passe (ou utilise un mot de passe d'application si tu utilises l'authentification à deux facteurs)
    }
  });

  const mailOptions = {
    from: email,
    to: 'tshibangup55@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Message sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
