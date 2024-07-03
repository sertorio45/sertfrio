import nodemailer from 'nodemailer';

export default async function (req, res) {
  console.log("Request received at send-email API");

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method not allowed' }));
    return;
  }

  const { name, email, area, message } = req.body;

  if (!name || !email || !area || !message) {
    console.log("Missing fields: ", req.body);
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'All fields are required' }));
    return;
  }

  console.log("Request body: ", req.body);

  const transporter = nodemailer.createTransport({
    host: 'mail.gsstudio.com.br',
    port: 465,
    secure: true,
    auth: {
      user: 'hello@gsstudio.com.br',
      pass: 'Giovanni0212sertorio#@!'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'hello@gsstudio.com.br',
    to: 'giovannistr@gmail.com',
    subject: `Novo contato de ${name} - ${area}`,
    text: `Nome: ${name}\nEmail: ${email}\nÁrea: ${area}\nMensagem: ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Formulário recebido e e-mail enviado com sucesso' }));
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Erro ao enviar e-mail', error }));
  }
};
