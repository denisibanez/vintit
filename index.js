function sendEmail() {
	Email.send({
	Host: "SMTP.office365.com",
	SecureToken : "a810e613-3a3d-41ca-bcff-748ba9501871",
	To : 'igor.vi471@gmail.com',
	From : "igor.vi471@gmail.com",
	Subject : "<teste>",
	Body : "<email body>",
	}).then(
		message => alert("e-mail enviado com sucesso")
	);
}