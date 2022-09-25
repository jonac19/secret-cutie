let FRIENDS = []

/**
 * Adds new friend to friend list. Friends are identified by their friend ID 
 * to retrieve their name and email.
 */
function addNewFriend() {
    friendName = parseName(document.getElementById('name').value)
    friendEmail = parseEmail(document.getElementById('email').value)
    friendList = document.getElementById('friends')
    friendId = FRIENDS.length

    // Check for valid name and email
    if (!validInput(friendName, friendEmail)) {
        return
    }

    FRIENDS.push([friendName, friendEmail])

    // Extends friend list in view
    if (friendId >= friendList.children.length){
        newFriendItem = document.createElement("li")
        newFriendItem.classList.add("friends-item")
        friendList.appendChild(newFriendItem)
    }

    friendItem = friendList.children[friendId]
    friendItem.textContent = friendName + "\t(" + friendEmail + ")"
}

/**
 * Parses the name to be capitalized
 * @param {String} name The name of the friend
 * @returns {String}    The capitalized name of the friend
 */
function parseName(name) {
    if (name == "") {
        return name
    }

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
    } else if (emailExists(email)) {
        document.getElementById('email_error').textContent = "Email already exists"
        valid = false
    } else {
        document.getElementById('email_error').textContent = ""
    }

    return valid
}

/**
 * Determines the existence of the email, rejecting its acceptance if it already exists
 * @param {String} email The email of the friend
 * @returns Bool         Whether the email already exists in the friend list
 */
function emailExists(email) {
    for (let friendId = 0; friendId < FRIENDS.length; friendId++) {
        if (email == FRIENDS[friendId][1]) {
            return true
        }   
    }
    return false
}

/**
 * Matches friends to another friend
 */
function matchFriends() {
    sleighAnimation()
    
    friendMatches = generateFriendMatches()

    // Displays matches in the view
    matchList = document.getElementById('matches')
    for (var friendId = 0; friendId < friendMatches.length; friendId++) {
        if (friendId >= matchList.children.length){
            newMatchItem = document.createElement("li")
            newMatchItem.classList.add("match-item")
            matchList.appendChild(newMatchItem)
        }
    
        matchItem = matchList.children[friendId]
        matchedFriendInfo = FRIENDS[friendMatches[friendId]]
        matchItem.textContent = matchedFriendInfo[0] + "\t(" + matchedFriendInfo[1] + ")"
    }
}

/**
 * Generates unique matches between friends
 * @returns {List[Int]} List matching friend IDs uniquely to another friend ID
 */
function generateFriendMatches() {
    if (FRIENDS.length < 2) {
        return []
    }

    friendId = 0
    path = new Set()
    numFriends = FRIENDS.length
    friendMatches = []
    for (let i = 0; i < numFriends; i++) {
        friendMatches.push(-1)
    }

    while (path.size < numFriends - 1) {
        path.add(friendId)
        do {
            randFriendIndex = Math.floor(Math.random() * numFriends)
        } while (
            randFriendIndex == friendId ||
            friendMatches[randFriendIndex] != -1 ||
            path.has(randFriendIndex)
        )

        friendMatches[friendId] = randFriendIndex
        friendId = randFriendIndex
    }
    friendMatches[friendId] = 0

    return friendMatches
}

/**
 * Animates sleigh element to slide out
 */
function sleighAnimation() {
    sleighElem = document.getElementById('sleigh')
    sleighElem.style.animation = 'slide-out 1s'

    sleighElem.addEventListener('animationend', () => {
        sleighElem.style.animation = null
    })
}

