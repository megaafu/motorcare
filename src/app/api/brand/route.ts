import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const {
    name,
    phone,
    person_phone,
    email,
    plate,
    delegation,
    service_categories,
    mileage,
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
    subject: '[Motorcare] Marcação de Serviço Outras Marcas',
    text: `
        Tipo de Client: ${client}
        Nome: ${name}
        Email: ${email}
        Contacto:${phone}
        Pessoa de Contacto:${person_phone}
        Quilometragem: ${mileage}
        Delegação: ${delegation}
        Matrícula: ${plate}
        Descrição do Serviço Necessário:${service_categories}
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