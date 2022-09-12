var EMAILS = {}

/**
 * Adds new friend to email list
 */
function addNewFriend() {
    friend_name = parseName(document.getElementById('name').value)
    friend_email = parseEmail(document.getElementById('email').value)
    friend_list = document.getElementById('friends')
    num_emails = Object.keys(EMAILS).length

    // Check for valid name and email
    if (!validInput(friend_name, friend_email)) {
        return
    }

    EMAILS[friend_email] = friend_name

    // Extends friend list in view
    if (num_emails > friend_list.children.length){
        new_friend_item = document.createElement("li")
        new_friend_item.classList.add("friends-item")
        friend_list.appendChild(new_friend_item)
    }

    friend_item = friend_list.children[num_emails]
    friend_item.textContent = friend_name
}

/**
 * Parses the name to be capitalized
 * @param {String} name The name of the friend
 * @returns {String}    The capitalized name of the friend
 */
function parseName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

/**
 * Parse the email to be in all lowercase
 * @param {String} email The email of the friend
 * @returns {String}     The lowercase email of the friend
 */
function parseEmail(email) {
    return email.toLowerCase()
}

/**
 * Determines the validity of the input
 * @param {String} name     The name of the friend
 * @param {String} email    The email of the friend
 * @returns {Bool}          Whether the input is valid or not
 */
function validInput(name, email) {
    valid = true
    if (name == "") {
        document.getElementById('name_error').textContent = "Please enter a name"
        valid = false
    } else {
        document.getElementById('name_error').textContent = ""
    }

    if (email == "") {
        document.getElementById('email_error').textContent = "Please enter an email"
        valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('email_error').textContent = "Email is invalid"
        valid = false
    } else if (email in EMAILS) {
        document.getElementById('email_error').textContent = "Email already exists"
        valid = false
    } else {
        document.getElementById('email_error').textContent = ""
    }

    return valid
}

/**
 * Sends secret santa invite to emails in email list
 */
function sendToFriends() {
    sleigh_animation()
    sendMail()
}

/**
 * Animates sleigh element to slide out
 */
function sleigh_animation() {
    sleigh_elem = document.getElementById('sleigh')
    sleigh_elem.style.animation = 'slide-out 2s'
}

document.getElementById('sleigh').addEventListener('animationend', () => {
    sleigh_elem = document.getElementById('sleigh')
    sleigh_elem.style.animation = null
})

