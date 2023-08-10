const startRegBtn = document.getElementById("startRegBtn");
const startLogBtn = document.getElementById("startLogBtn");

const registerPage = document.getElementById("registerPage");
const loginPage = document.getElementById("loginPage");


const showPasswordBtnForReg = document.getElementById("showPasswordBtnForReg");
const passwordInp = document.getElementById("passwordInp");
const userNameInp = document.getElementById("userNameInp");
const registerBtn = document.getElementById("registerBtn");

const passwordInp1 = document.getElementById("passwordInp1");
const userNameInp1 = document.getElementById("userNameInp1");
const loginBtn = document.getElementById("loginBtn");

const logedPage = document.getElementById("logedPage");
const userNameInPage = document.getElementById("userNameInPage")

var regData = {};

function startRegistrationBtn() {
    console.log("registrationBtn clicked");
    startRegBtn.style.display = "none";
    startLogBtn.style.display = "block";
    registerPage.style.display = "block";
    loginPage.style.display = "none";
    userNameInp1.value = '';
    passwordInp1.value = '';
    showPasswordforLogin.checked = false;



}
function startLoginBtn() {
    userNameInp1.value = '';
    passwordInp1.value = '';
    showPasswordforLogin.checked = false;
    console.log("login Btn clicked");
    startRegBtn.style.display = "block";
    startLogBtn.style.display = "none";
    loginPage.style.display = "block";
    registerPage.style.display = "none";


}


function showPasswordforReg() {
    if (passwordInp.type === "password") {
        passwordInp.type = "text";
    } else {
        passwordInp.type = "password";
    }

}

function registerBtnFun() {
    let UNI = userNameInp.value;
    let PI = passwordInp.value;

    if (userNameInp.value in regData) {
        alert("already this Username is pre")
    }
    else if (UNI == '' & PI == '') {
        alert("please enter User Name and Password")
    }
    else if (UNI === '') {
        alert("please enter user Name")
    }
    else if (PI === '') {
        alert("please enter Password")
    }

    else {
        regData[UNI] = passwordInp.value;
        console.log(regData)
        userNameInp.value = '';
        passwordInp.value = '';
        showPasswordforReg.checked = false;
        alert("Successfully Registered....")
        registerPage.style.display = "none";
        loginPage.style.display = "block";
        startRegBtn.style.display = "block";

    }
}


function showPasswordforLogin() {
    if (passwordInp1.type === "password") {
        passwordInp1.type = "text";
    } else {
        passwordInp1.type = "password";
    }

}
function loginBtnFun() {
    var UNI1 = userNameInp1.value;
    var PI1 = passwordInp1.value;
    // userNameInp1.value = '';
    // passwordInp1.value = '';
    showPasswordforLogin.checked = false;

    if (UNI1 == '' & PI1 == '') {
        alert("Please enter User Name and Password")
    }
    else if (UNI1 === '') {
        alert("Please enter user Name")
    }
    else if (PI1 === '') {
        alert("Please enter Password")
    }
    else if (!(userNameInp1.value in regData)) {
        alert("Invalid user name")
    }
    else if (!(regData[userNameInp1.value] == passwordInp1.value)) {
        alert("Invalid password")
    }

    else {

        alert("Login Successfully ....")
        // userNameInp1.value = '';
        passwordInp1.value = '';

        registerPage.style.display = "none";
        loginPage.style.display = "none";
        logedPage.style.display = "block";
        userNameInPage.innerHTML = `<h2>User Name : ${(userNameInp1.value)}`;
        userNameInp1.value = '';
        passwordInp1.value = '';

    }
}


function LogoutBtnFun() {
    console.log("logout btn clicked")
    logedPage.style.display = "none";
    loginPage.style.display = "block";


}
