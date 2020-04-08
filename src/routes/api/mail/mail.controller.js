import nodemailer from "nodemailer";
import smtpPool from "nodemailer-smtp-pool";

import { wrapperAsync } from "@/routes/api/helper";
import { mailInfo } from "@/config";

export const sendTempPassword = wrapperAsync(async (req, res, next) => {
  const { emailAddress, htmlMessage } = req.body;

  const config = {
    mailer: {
      serivce: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: mailInfo.user,
        pass: mailInfo.pass
      }
    }
  };
  const mailOption = {
    from: mailInfo.user,
    to: emailAddress,
    subject: "Nuvi Labs 비밀번호 변경 메일 입니다.",
    html: htmlMessage
  };

  const transporter = nodemailer.createTransport(
    smtpPool({
      ...config.mailer,
      tls: {
        rejectUnauthorize: false
      },
      secure: false,
      maxConnections: 5,
      maxMessages: 10
    })
  );

  const info = await transporter.sendMail(mailOption);
  console.log("info", info);
  transporter.close();
  res.status(200).json(info);
});
