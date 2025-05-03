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
      from: 'simposioumg25@gmail.com',
      to: email,
      subject: 'QR de acceso al Simposio de Tecnología INNOVA-UMG 2025',
      html: `
        <h1>Bienvenido al Simposio de Tecnología INNOVA-UMG 2025</h1>
        <h2>¡Gracias por completar tu pago, ${nombre}!</h2>
        <p>Adjunto encontrarás tu código QR:</p>
        
      `,
      attachments: [{
        filename: 'codigo-qr.png',
        content: qrImage.split('base64,')[1],
        encoding: 'base64'
      }]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Mensaje enviado:', info);
  
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
};