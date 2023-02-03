




// var email_option =document.getElementsById("select-div");
// email_option.addEventListener("onchange", showeInputBox());


function showInputBox(){
    var selectform=document.getElementById("select-div");
    var options=selectform.options[selectform.selectedIndex].value;

    if(options==="email"){
        showemail();
    
    }else if(options==="phone"){
        showphone();
    };
    
    
}


// var phone_option =document.getElementById("phone-selected");
// phone_option.addEventListener('click ', showphone);


function showphone(){
    document.getElementById("phone-div").style.visibility="visible";
    document.getElementById("email-div").style.visibility="hidden";
}

function showemail(){
    document.getElementById("email-div").style.visibility="visible";
    document.getElementById("phone-div").style.visibility="hidden";
}

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