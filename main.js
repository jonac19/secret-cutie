const nodemailer = require('nodemailer')
const { google } = require('googleapis');

const CLIENT_ID = '1044622659958-9m1bmqsi9956mkoa5aek32rt714elijv.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04zfZWwcdtdQNCgYIARAAGAQSNwF-L9IrNDqXn845Z6wZJCrvnzB8Pyuw6QhklaSX8DoWty4sEjNhe5cGCPn6ILsIee8U4vWf4ks';

const OAuth2 = google.auth.OAuth2
const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(){
    try{
        //const accessToken = oAuth2Client.getAccessToken()
        const accessToken = 'ya29.a0ARrdaM_frJGmRjcGlSa42B4k5b-CY16HbMkoPRRvFX9eseOtKCSRQL-fNHEyiuXoedZaGUMXPQkXe6liBjD-p4SJzdkyMr-ieVTdE3h5kJYiKoKbM7BtOJdeIJYQixe66uDD-lIcehjYg0bc4MeWbKzkbNxS'

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
            from: 'SECRET CUTIE TEST <secretcutietest@gmail.com>',
            to: 'secretcutietest@gmail.com',
            subject: 'SECRET CUTIE TEST TEST',
            text: 'PLEASE WORK',
            html: '<h1>PLEASE WORK</h1>'
        }

        const result = transport.sendMail(mailOptions)
        return result
    } catch(error){
        return error
    }
}

sendMail().then((result)=> console.log('EMAIL SENT...', result))
    


const EMAILS = []

/*
function addNewCutie(){
    cutie_name = document.getElementById('name').value;
    cutie_email = document.getElementById('email').value;

    EMAILS.push(cutie_email);

    friend_list = document.getElementById('friends');

    num_emails = EMAILS.length
    if (num_emails > friend_list.children.length){
        new_friend_item = document.createElement("li");
        new_friend_item.classList.add("friends-item");
        friend_list.appendChild(new_friend_item);
    };

    friend_item = friend_list.children[num_emails - 1];
    friend_item.textContent += cutie_name;
};

function sendToCuties(){
    sleigh_animation();
    console.log('sent')
};

function sleigh_animation(){
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = 'slide-out 2.5s';
};

document.getElementById('sleigh').addEventListener('animationend', () => {
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = null;
});
*/