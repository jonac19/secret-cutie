const nodemailer = require('nodemailer')
const { google } = require('googleapis');

const CLIENT_ID = '1044622659958-9m1bmqsi9956mkoa5aek32rt714elijv.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04oyg6gLBcfZFCgYIARAAGAQSNwF-L9IrWIxeCSQwblklaCQCC-dRV21P2RVO_0a-342abprVt8Br74l7QTaCUQA2oAqk77P4C7U';

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

const EMAILS = []

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
    generateCutiePairs()
};

function sleigh_animation(){
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = 'slide-out 2.5s';
};

document.getElementById('sleigh').addEventListener('animationend', () => {
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = null;
});

function generateCutiePairs(){
    const emails_copy = EMAILS.copyWithin
    const cutie_pairs = {}
    const cutie_first = ''

    for (const i = 0; i < EMAILS.length; i++){
        if (cutie_first){
            Math.random() * EMAILS.length
        }
    }
    Math.random() * EMAILS_UNPAIRED
}
