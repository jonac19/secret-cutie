const EMAILS = []

/**
 * Adds new friend to email list
 */
function addNewFriend(){
    friend_name = document.getElementById('name').value;
    friend_email = document.getElementById('email').value;
    friend_list = document.getElementById('friends');
    num_emails = EMAILS.length;

    EMAILS.push(friend_email);

    // Extends friend list in view
    if (num_emails > friend_list.children.length){
        new_friend_item = document.createElement("li");
        new_friend_item.classList.add("friends-item");
        friend_list.appendChild(new_friend_item);
    };

    friend_item = friend_list.children[num_emails - 1];
    friend_item.textContent += friend_name;
};

/**
 * Sends secret santa invite to emails in email list
 */
function sendToFriends(){
    sleigh_animation();
    sendMail();
};

/**
 * Animates sleigh element to slide out
 */
function sleigh_animation(){
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = 'slide-out 2s';
};

document.getElementById('sleigh').addEventListener('animationend', () => {
    sleigh_elem = document.getElementById('sleigh');
    sleigh_elem.style.animation = null;
});

