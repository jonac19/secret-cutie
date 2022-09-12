const nodemailer = require('nodemailer')
const { google } = require('googleapis');

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

const OAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

function sendMail(){
    try{
        const accessToken = OAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'secretcutietest@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'Secret Cutie <secretcutietest@gmail.com>',
            to: 'secretcutietest@gmail.com',
            subject: 'Secret Cutie Gift Exchange Partner',
            text: 'Happy Holidays!\n\nThe person you\'ll be gifting to is ${randomCutie()}',
        }

        const result = transport.sendMail(mailOptions)
        return result
    } catch(error){
        return error
    }
}