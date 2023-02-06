

function showInputBox(){
    var selectform=document.getElementById("select-div");
    var options=selectform.value;

    switch(options){

        case "email":
            showemail();
            break;
        case "phone":
            showphone();
            break;
        default:
            document.getElementById("phone-div").style.display="none";
            document.getElementById("email-div").style.display="none"; 
    }
    
}


function showphone(){
    document.getElementById("phone-div").style.display="block";
    document.getElementById("email-div").style.display="none";
}

function showemail(){
    document.getElementById("email-div").style.display="block";
    document.getElementById("phone-div").style.display="none";
}

