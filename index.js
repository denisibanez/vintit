function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "igor.vi471@gmail.com",
	Password : "949206546igor",
	To : 'igor.vi471@gmail.com',
	From : "igor.vi471@gmail.com",
	Subject : "<teste>",
	Body : "<email body>",
	}).then(
		message => alert("e-mail enviado com sucesso")
	);
}