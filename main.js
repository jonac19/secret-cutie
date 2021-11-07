emails = []

function addNewCutie(){
    console.log('working')
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