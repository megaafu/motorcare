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
    date,
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
    subject: 'Sugestões e Reclamações',
      text: `
        Tipo de Client: ${client}
        Nome: ${name}
        Email: ${email}
        Contacto:${phone}
        Pessoa de Contacto:${person_phone}
        Quilometragem: ${mileage}
        Delegacao: ${delegation}
        Matrícula: ${plate}
        Descrição do Serviço Necessário:${service_categories}
        Data que Pretendida: ${date}

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
    return NextResponse.json({ message: 'Email Enviado' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}