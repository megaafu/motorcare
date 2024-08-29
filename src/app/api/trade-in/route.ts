import formatedDate from '@/lib/util/formateDate';
import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const {
    name,
    phone,
    person_phone,
    email,
    car_model,
    car_year,
    dealership,
    avaliation_date,
    mileage_now,
    avaliation,
    car_damage,
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
    subject: 'Serviço de Trade-In',
    text: [
      `Tipo de Cliente: ${client}`,
      `Nome: ${name}`,
      `Email: ${email}`,
      `Contacto: ${phone}`,
      person_phone ? `Pessoa de Contacto: ${person_phone}` : null, // Conditionally add person_phone if not null
      `Modelo do Carro: ${car_model}`,
      `Ano de Fabrico: ${formatedDate(car_year)}`,
      `Concessionária onde adquiriu: ${dealership}`,
      `Data que pretende fazer a avaliação física: ${formatedDate(avaliation_date)}`,
      `Quilometragem Atual: ${mileage_now}`,
      `Local onde pretende fazer a avaliação: ${avaliation}`,
      `A viatura sofreu algum tipo de acidente? ${car_damage}`,
    ]
      .filter(Boolean) // Removes the null value from person_phone if it is null
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
