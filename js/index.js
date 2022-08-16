function sendEmail() {
	// var sender=Form.sender.value
	// var pswd=Form.pswd.value
	// var reciever=Form.reciever.value
	// var mesg=Form.Message.value;
	// alert(reciever) 
	Email.send({ 
	Host: "mail.elitecsteel.com", 
	Username: 'info@elitecsteel.com', 
	Password:'WV%jv1Gu=sUx', 
	To: 'darkdiamond.dr@gmail.com', 
	From: 'darkdiamond.dr@gmail.com', 
	Subject: "Sending Email using javascript",
	Body: 'mesg', 
	}).then(function (message) { 
		alert('Thanks, Message Send Successfully We Will Contact You Soon ')
	console.log("mail sent successfully", message) 
	}); 
	}