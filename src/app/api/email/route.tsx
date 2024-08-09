import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, firstName, lastName, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    debug: true,
    logger: true,
    // host: "smtp.gmail.com",
    // tls: {
    //   ciphers: "SSLv3",
    // },
    // port: 465,
    // secure: true,
    /* 
      setting service as 'gmail' is same as providing these setings:
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${firstName} ${lastName} (${email})`,
    text: message,
  };

  const sendMailPromise = () => {
    return new Promise((resolve, reject) => {
      transport.verify((error, success) => {
        if (error) {
          console.log(`Connection error: ${error}`);
        } else {
          console.log("Server is ready to take our messages.");
        }
      });

      transport.sendMail(mailOptions, (err, info) => {
        if (!err) {
          resolve(info);
        } else {
          reject(err);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
