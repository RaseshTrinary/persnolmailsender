# persnolmailsender

servicce to send mail every 30 mins when server is crashed


createMailService ({
    createService : {
        service: 'SendPulse', // service name
           auth: {
                user: 'account.email@example.com', // username
                pass: 'smtp-password' // password
            }
    },
    messageData : {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
    }
})