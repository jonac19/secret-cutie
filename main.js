emails = []

function addNewCutie(){
    cutie_name = document.getElementById('name').value;
    cutie_email = document.getElementById('email').value;

    emails.push(cutie_email);

    friend_list = document.getElementById('friends');

    num_emails = emails.length
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