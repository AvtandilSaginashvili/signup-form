function create() {
    let name = document.getElementById("nameinput");
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

    if (password.value == "") {
        password.style.border = "1px solid red"
        document.getElementById("woop3").innerHTML = "input is empty";
        document.getElementById("woop3").style.color = "red";
    }else {
        password.style.border = "1px solid transparent"
        document.getElementById("woop3").innerHTML = "";
    }
    
}

const validation = document.getElementById("forma");
validation.addEventListener("submit", e =>{
    e.preventDefault();
    const emailInput = validation.emailinput.value;
    var emailInputVal = document.getElementById("emailinput");
    let alert22 = document.getElementById("woop22");
    const patternForEmailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (patternForEmailInput.test(emailInput)) {
        emailInputVal.style.border = "1px solid green"
        alert22.innerHTML = "";
    }else {
        emailInputVal.style.border = "1px solid red";
        alert22.style.color = "red";
        alert22.innerHTML = "Input is empty or insert '@'";
    }
})