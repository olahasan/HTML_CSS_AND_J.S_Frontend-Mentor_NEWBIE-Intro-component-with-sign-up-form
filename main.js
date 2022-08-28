let inputFirst = document.querySelector("[name='First Name']");
let inputFirstImg = document.getElementById("First");
let inputFirstSmall = document.getElementById("small_First");
console.log(inputFirst);
console.log(inputFirstImg);
console.log(inputFirstSmall);


let inputLast = document.querySelector("[name='Last Name']");
let inputLastImg = document.getElementById("Last");
let inputLastSmall = document.getElementById("small_Last");
console.log(inputLast);
console.log(inputLastImg);
console.log(inputLastSmall);


let inputEmail = document.querySelector("[name='Email Address']");
let inputEmailImg = document.getElementById("Email");
let inputEmailSmall = document.getElementById("small_Email");
console.log(inputEmail);
console.log(inputEmailImg);
console.log(inputEmailSmall);


let inputPassword = document.querySelector("[name='password']");
let inputPasswordImg = document.getElementById("password");
let inputPasswordSmall = document.getElementById("small_password");
console.log(inputPassword);
console.log(inputPasswordImg);
console.log(inputPasswordSmall);




document.forms[0].onsubmit = function (e) {
    if (inputFirst.value === "") {
        inputFirstImg.classList.remove("hide");
        inputFirstSmall.classList.remove("hide");
        e.preventDefault();
    } else if (inputLast.value === "") {
        inputLastImg.classList.remove("hide");
        inputLastSmall.classList.remove("hide");
        e.preventDefault();
    } else if (!inputEmail.value.includes("@")) {
        inputEmailImg.classList.remove("hide");
        inputEmailSmall.classList.remove("hide");
        e.preventDefault();
    } else if (inputPassword.value.length <= 5 || inputPassword.value.length >= 20) {
        inputPasswordImg.classList.remove("hide");
        inputPasswordSmall.classList.remove("hide");
        e.preventDefault();
    }
}
inputFirst.onclick = function () {
    inputFirstImg.classList.add("hide");
    inputFirstSmall.classList.add("hide");
}
inputLast.onclick = function () {
    inputLastImg.classList.add("hide");
    inputLastSmall.classList.add("hide");
}
inputEmail.onclick = function () {
    inputEmailImg.classList.add("hide");
    inputEmailSmall.classList.add("hide");
}
inputPassword.onclick = function () {
    inputPasswordImg.classList.add("hide");
    inputPasswordSmall.classList.add("hide");
}

