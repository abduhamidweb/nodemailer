const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
async function sendMail() {
  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: path.join(process.cwd(), env.email), // Elektron pochtangizni kiriting
        pass: path.join(process.cwd(), env.password), // Parolni kiriting
      },
    })

    let info = await transporter.sendMail({
      from: path.join(process.cwd(), env.email), // Yuboruvchi elektron pochtangizni kiriting
      to: path.join(process.cwd(), env.youremail), // Qabul qiluvchi elektron pochtangizni kiriting
      subject: 'Assalomu alaykum', // Mavzuni kiriting
      text: 'Bu test xabar.', // Xabar matnini kiriting
    })

    console.log('Email yuborildi: ', info.messageId)
  } catch (error) {
    console.log('Xatolik yuz berdi: ', error)
  }
}

sendMail()
