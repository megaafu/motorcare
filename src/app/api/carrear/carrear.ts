import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const province = formData.get("province") as string;
  const department = formData.get("department") as string;
  const file = formData.get("doc") as File | null;

  // Convert the file to a buffer if uploaded
  let attachment: Mail.Attachment[] = [];
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachment = [
      {
        filename: file.name,
        content: buffer,
      },
    ];
  }

  // Nodemailer transporter
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Email options
  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: "Marcação de Serviço de Peças",
    text: [
      `Nome: ${name}`,
      `Email: ${email}`,
      `Contacto: ${phone}`,
      `Provincia: ${province}`,
      `Area: ${department}`,
    ]
      .filter(Boolean)
      .join("\n"),
    attachments: attachment,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email Enviado");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Enviado" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

