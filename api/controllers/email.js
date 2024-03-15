const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
});

exports.sendEmail = async (req, res) => {
    try {
        const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/index.ejs'), {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            message: req.body.message
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Portfolio - message',
            html: emailTemplate 
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email envoyé' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.' });
    }
};