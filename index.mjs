import nodemailer from "nodemailer";
import envVariables from './parserEnv.mjs'

class EmailService {
  constructor(transporter) {
    this.transporter = transporter;
  }

  async sendEmail({from, to, subject, text, html}) {
    try {
      const info = await this.transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
      });
      console.log("Email sent:", info.messageId);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }
}

(async function() {

  const transporter = nodemailer.createTransport({
    host: envVariables.HOST,
    port: envVariables.PORT,
    secure: false,
    auth: {
      user: envVariables.USER,
      pass: envVariables.PASS,
    },
  });

  const emailService = new EmailService(transporter);

  const from = envVariables.USER;
  const to = "destinate@gmail.com";
  const subject = "Hello ✔";
  const text = "Hello world?";
  const html = "<b>Hello world 2. 0?</b>";

  await emailService.sendEmail({from, to, subject, text, html});
})().catch(console.error);