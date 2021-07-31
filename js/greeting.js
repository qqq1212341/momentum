const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.getElementById("greeting");
const Hidden_ClassName = "hidden";
const userName_Key = "username";

function handelLoginBtnSubmit(event){
    event.preventDefault();
    loginForm.classList.add(Hidden_ClassName);
    const username = loginInput.value;
    localStorage.setItem(userName_Key, username);
    paintingGreetings(username);
}

function paintingGreetings(UserName){
    greeting.innerText = `Hello ${UserName}`;
    greeting.classList.remove(Hidden_ClassName);
}

const savedUserName = localStorage.getItem(userName_Key);

if (savedUserName === null) {
    console.log("1");
    loginForm.classList.remove(Hidden_ClassName);
    loginForm.addEventListener("submit", handelLoginBtnSubmit);
}else {
    paintingGreetings(savedUserName);
}

