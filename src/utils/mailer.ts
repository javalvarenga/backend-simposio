import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'simposioumg25@gmail.com',
    pass: 'cuoi qddg aqpw rsfo',
  },
});

export const enviarQR = async (email: string, nombre: string, qrImage: string) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Tu código QR para el evento',
      html: `
        <h1>¡Gracias por completar tu pago, ${nombre}!</h1>
        <p>Adjunto encontrarás tu código QR:</p>
        
      `,
      attachments: [{
        filename: 'codigo-qr.png',
        content: qrImage.split('base64,')[1],
        encoding: 'base64'
      }]
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
};