const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'mail.gsstudio.com.br',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'hello@gsstudio.com.br', // Seu email
    pass: 'Giovanni0212sertorio#@!' // Sua senha
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/api/form', (req, res) => {
  const { name, email, area, message } = req.body;

  const mailOptions = {
    from: 'hello@gsstudio.com.br',
    to: 'giovanni@gsstudio.com.br',
    subject: `Novo contato de ${name} - ${area}`,
    text: `Nome: ${name}\nEmail: ${email}\nÁrea: ${area}\nMensagem: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Erro ao enviar e-mail', error });
    } else {
      console.log('E-mail enviado:', info.response);
      res.json({ message: 'Formulário recebido e e-mail enviado com sucesso' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
