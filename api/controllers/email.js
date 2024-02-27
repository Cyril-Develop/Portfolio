const nodemailer = require('nodemailer');

//Send email
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

exports.sendEmail = (req, res) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Portfolio - Nouveau message de ' + req.body.firstname + ' ' + req.body.lastname,
        html: `
        <p>De : ${req.body.firstname} ${req.body.lastname}</p>
        <p>Email : ${req.body.email}</p>
		<p>${req.body.message}</p>
		`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ message: 'Email envoyé' });
        }
    });
};