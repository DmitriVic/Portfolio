




 

	// eslint-disable-next-line import/no-anonymous-default-export
	export default function (req, res) {

		require('dotenv').config()
		
		let nodemailer = require('nodemailer')
		const transporter = nodemailer.createTransport({
			port: 465,
			host: "smtp.mail.ru",
			auth: {
			user: 'mis_sham@mail.ru',
			pass: 'M9Pu3wg8c21us3N8ZAkp',
			},
			secure: true,
			})
		const mailData = {
		  from: 'mis_sham@mail.ru',
		  to: 'mr_vlasov@mail.ru',
		  subject: `Сообщение от ${req.body.name}`,
		  text: req.body.message + " | Pnone number: " + req.body.newPhone,
		  html: `<div>${req.body.message}</div><p> Отправить на номер:
		  ${req.body.newPhone} </p>`,
		  
		}
		transporter.sendMail(mailData, function (err, info) {
		  if(err)
			 console.log(err)
		  else
			 console.log(info)
		})
		res.status(200).end()
	 }