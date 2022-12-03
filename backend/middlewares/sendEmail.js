const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {


    const transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "99889d6b6f0903",
            pass: "e3b89989595750"
        }
    });

    const mailOptions = {
        from: "smtp.mailtrap.io",
        to: options.email,
        subject: options.subject,
        text: options.message
    }



    await transporter.sendMail(mailOptions)
}