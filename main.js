const EMAILS = []

/**
 * Adds new friend to email list
 */
function addNewFriend() {
    friend_name = document.getElementById('name').value
    friend_email = document.getElementById('email').value
    friend_list = document.getElementById('friends')
    num_emails = EMAILS.length

    // Check for valid name and email
    if (!validInput(friend_name, friend_email)) {
        return
    }

    EMAILS.push(friend_email)

    // Extends friend list in view
    if (num_emails > friend_list.children.length){
        new_friend_item = document.createElement("li")
        new_friend_item.classList.add("friends-item")
        friend_list.appendChild(new_friend_item)
    }

    friend_item = friend_list.children[num_emails - 1]
    friend_item.textContent = friend_name
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
        document.getElementById('email_error').textContent = "Please enter a valid email"
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

