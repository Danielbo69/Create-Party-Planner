const nodemailer = require('nodemailer');
const { env } = ("process");
require ('dotenv').config();

const createTrans = () => {
    const transporte = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASSWORD
        }
    });
    return transporte;
    // transporte.verify().then(() => console.log('Listo para enviar el correo'))
}

const sendMail = async () => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: 'Nuevo Evento <danielboscanramos@gmail.com>',
            to: process.env.TRANSPORTER_USER,
            subject: "Mensaje de Prueba",
            html: "<b>Hello World</b>"
    })
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail = () => sendMail();