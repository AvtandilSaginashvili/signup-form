function create() {
    let name = document.getElementById("nameinput");
    let email = document. getElementById("emailinput");
    let password = document.getElementById("passwordinput");
    let alert = document.getElementById("woop");

    if (name.value == "") {
        name.style.border = "1px solid red"
        alert.innerHTML = "Input is empty";
        alert.style.color = "red";
    }else {
        alert.innerHTML = "";
        name.style.border = "1px solid transparent";
    }

    if ( email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById("woop2").innerHTML = "Input is empty or insert '@'";
        document.getElementById("woop2").style.color = "red";
    }else {
        document.getElementById("woop2").innerHTML = "";
        email.style.border = "1px solid transparent";
    }

    if (password.value == "") {
        password.style.border = "1px solid red"
        document.getElementById("woop3").innerHTML = "input is empty";
        document.getElementById("woop3").style.color = "red";
    }else {
        password.style.border = "1px solid transparent"
        document.getElementById("woop3").innerHTML = "";
    }
    
}
