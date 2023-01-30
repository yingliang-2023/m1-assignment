
var email_option =document.getElementById("email-selected");
email_option.addEventListener('select', showemail);


function showemail(){
    document.getElementById("email-div").style.visibility="visible";
}


var phone_option =document.getElementById("phone-selected");
phone_option.addEventListener('select', showphone);


function showphone(){
    document.getElementById("phone-div").style.visibility="visible";
}



