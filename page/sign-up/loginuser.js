let logIn = document.getElementById("form");
logIn.addEventListener("submit", (event) => {
  event.preventDefault();

  let Data = JSON.parse(localStorage.getItem("user"));
  console.log(Data);
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;
  console.log(email, password);

  let isthis = false;
  for (let i = 0; i < Data.length; i++) {
    if (
      email === Data[i].email &&
      password == Data[i].password &&
      "user" == Data[i].role
    ) {
      isthis = true;
      // log.push(Data[i]);
      window.localStorage.setItem("userinfo", JSON.stringify(Data[i].email));
      break;
    } else {
      isthis = false;
    }
  }

  if (isthis === true) {
    alert("success");
    // if (localStorage.getItem("userinfo") !== null) {
    //   let clear = document.getElementsById("remnove");
    //   clear.style.display = "none";
    // }
    window.location.href = "/indexuser.html";
  } else {
    alert("failed");
    window.location.href = "./sign-up.html";
  }
});
