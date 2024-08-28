import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const {
    name,
    phone,
    person_phone,
    email,
    drive_number,
    location,
    car_model,
    drive_date,
    client
  } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  const formatedDate = (date: Date) => {
    if (!date) return ''

    const formatedDate = new Date(date)
    formatedDate.toLocaleDateString('pt-Pt', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: 'Agendar Test-Drive',
    text: [
      `Tipo de Cliente: ${client}`,
      `Nome: ${name}`,
      `Email: ${email}`,
      `Contacto: ${phone}`,
      person_phone ? `Pessoa de Contacto: ${person_phone}` : null,
      `Numero da Carta de Conducao: ${drive_number}`,
      `Modelo pretendido: ${car_model}`,
      `Onde pretende fazer o test-drive: ${location}`,
      `Data de Validade da Carta de Condução: ${formatedDate(drive_date)}`
    ]
      .filter(Boolean) // Removes any null or undefined values
      .join('\n'), // Joins all lines with a newline character
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
