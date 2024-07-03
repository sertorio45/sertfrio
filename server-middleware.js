import bodyParser from 'body-parser';
import sendEmail from './server/api/send-email';

export default function (req, res, next) {
  // Adiciona body-parser middleware
  bodyParser.json()(req, res, () => {
    // Chama o próximo middleware (sendEmail)
    sendEmail(req, res, next);
  });
}
