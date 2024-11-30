const mail=require('nodemailer')
const transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: 'okrajat2004@gmail.com',
        pass: 'ludy fgbb isqh jjqk'
    }
})

const service={
    from:'okrajat2004@gmail.com',
    to:"souravgoswami@gmail.com",
    subject:"Test Mail",
    text:"Good Afternoon Sir Myself Rajat Dey."
}
transporter.sendMail(service,(err)=>{
    if (err)throw err
    console.log('Message sent')
})