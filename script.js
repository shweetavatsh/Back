let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title= document.getElementById("title");

signupBtn.onclick =function () {
    nameField.style.maxHeight ="0";
    title.innerHTML ="sign in";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

signupBtn.onclick =function() {
    nameField.style.maxHeight ="60px";
    title.innerHTML="sign up";
}
