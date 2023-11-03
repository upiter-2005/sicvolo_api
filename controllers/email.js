const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { name, phone, email, comment } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        // user: "pavel470245@gmail.com",
        // pass: "tkpizlqqrtlpfbwb",
        user: "vetolgold@gmail.com",
        pass: "emcimbortephjpzr",
      },
      secure: false,
        // service: "gmail",
    });

    const mailOptions = {
      from: "sic volo <vetolgold@gmail.com>",
      to: "vetolgold@gmail.com",
      subject: "Sic Volo Form request",
      html: `Name: ${name} <br> Phone: ${phone} <br> Mail: ${email} <br> Comment: ${comment}`,
      //text: `Mail sending`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      } 
    });

    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};
const sendMailPartner = async (req, res) => {
  try {
    const { name, phone, email, nick } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        // user: "pavel470245@gmail.com",
        // pass: "tkpizlqqrtlpfbwb",
        user: "vetolgold@gmail.com",
        pass: "emcimbortephjpzr",
      },
      secure: false,
        // service: "gmail",
    });

    const mailOptions = {
      from: "sic volo <vetolgold@gmail.com>",
      to: "vetolgold@gmail.com",
      subject: "Sic Volo Form request",
      html: `Name: ${name} <br> Phone: ${phone} <br> Mail: ${email} <br> Nickname: ${nick}`,
      //text: `Mail sending`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      } 
    });

    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};

module.exports = {
  sendMail,
  sendMailPartner
};
