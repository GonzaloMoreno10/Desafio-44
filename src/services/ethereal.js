import {
  ETHEREAL_EMAIL,
  ETHEREAL_NAME,
  ETHEREAL_PASSWORD,
} from '../config/venv';
import nodemailer from 'nodemailer';
class Email {
  owner;
  transporter;

  constructor() {
    this.owner = {
      name: ETHEREAL_NAME,
      address: ETHEREAL_EMAIL,
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      secure: false,
      port: 587,
      auth: {
        user: 'jeanne.corkery68@ethereal.email',
        pass: '1ShW9pGgAY6kF8gmkN',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(dest, subject, content) {
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: content,
    };

    console.log(mailOptions);
    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
}

export const EtherealService = new Email();
