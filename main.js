document.addEventListener("DOMContentLoaded", () => {
  const inputFirst = document.querySelector("[name='First Name']");
  const inputFirstImg = document.getElementById("First");
  const inputFirstSmall = document.getElementById("small_First");

  const inputLast = document.querySelector("[name='Last Name']");
  const inputLastImg = document.getElementById("Last");
  const inputLastSmall = document.getElementById("small_Last");

  const inputEmail = document.querySelector("[name='Email Address']");
  const inputEmailImg = document.getElementById("Email");
  const inputEmailSmall = document.getElementById("small_Email");

  const inputPassword = document.querySelector("[name='password']");
  const inputPasswordImg = document.getElementById("password");
  const inputPasswordSmall = document.getElementById("small_password");

  //   console.log(inputFirst, inputFirstImg, inputFirstSmall);
  //   console.log(inputLast, inputLastImg, inputLastSmall);
  //   console.log(inputEmail, inputEmailImg, inputEmailSmall);
  //   console.log(inputPassword, inputPasswordImg, inputPasswordSmall);

  document.forms[0].addEventListener("submit", (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputFirst.value.trim() === "") {
      inputFirstImg.classList.remove("hide");
      inputFirstSmall.classList.remove("hide");
      e.preventDefault();
    } else if (inputLast.value.trim() === "") {
      inputLastImg.classList.remove("hide");
      inputLastSmall.classList.remove("hide");
      e.preventDefault();
    } else if (!emailPattern.test(inputEmail.value.trim())) {
      inputEmailImg.classList.remove("hide");
      inputEmailSmall.classList.remove("hide");
      e.preventDefault();
    } else if (
      inputPassword.value.length <= 5 ||
      inputPassword.value.length >= 20
    ) {
      inputPasswordImg.classList.remove("hide");
      inputPasswordSmall.classList.remove("hide");
      e.preventDefault();
    }
  });

  const hideError = (inputImg, inputSmall) => {
    inputImg.classList.add("hide");
    inputSmall.classList.add("hide");
  };

  inputFirst.addEventListener("click", () =>
    hideError(inputFirstImg, inputFirstSmall)
  );
  inputLast.addEventListener("click", () =>
    hideError(inputLastImg, inputLastSmall)
  );
  inputEmail.addEventListener("click", () =>
    hideError(inputEmailImg, inputEmailSmall)
  );
  inputPassword.addEventListener("click", () =>
    hideError(inputPasswordImg, inputPasswordSmall)
  );
});
