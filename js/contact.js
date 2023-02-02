
var email_option =document.getElementById("email-selected");
email_option.addEventListener("click", showemail);


function showemail(){
    document.getElementById("email-div").style.visibility="visible";
   
}


// var phone_option =document.getElementById("phone-selected");
// phone_option.addEventListener('click ', showphone);


// function showphone(){
//     document.getElementById("phone-div").style.visibility="visible";
// }



// var select_div=document.querySelector("select");
// select_div.addEventListener("change", show());


// function show(){
//     if(select_div.option[0]==="phone"){
//         document.getElementById("phone-div").style.visibility="visible"
//     }else if(select_div.value==="email"){
//         document.getElementById("phone-div").style.visibility="visible";
//     }
// }

// function function1(){
//     var email1=getElementById("#email-selected");
//     console.log(email1);
//     if (email==="<option id="email-selected" value="email" select>Email</option>"){
//         document.getElementById("email-div").style.visibility="visible";
//     }
// }