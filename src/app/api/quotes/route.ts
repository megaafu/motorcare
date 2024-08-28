import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const {
    name,
    phone,
    person_phone,
    email,
    province,
    vehicle,
    client
  } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: 'Pedir Cotação',
    text: `
        Tipo de Cliente: ${client}
        Nome: ${name}
        Email: ${email}
        Contacto:${phone}
        Pessoa de Contacto:${person_phone}
        Província: ${province}
        Veículo pretendido: ${vehicle}
      `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email Enviado');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email Enviado Com Sucesso' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
