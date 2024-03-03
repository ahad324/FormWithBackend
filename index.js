// SHOW/HIDE LOGIN AND REGISTER FORM
let registerform = document.getElementById('registerform');
let loginform = document.getElementById('loginform');
let loginlink = document.getElementById('loginlink');
let registerlink = document.getElementById('registerlink');

loginlink.addEventListener('click', () => {
    registerform.classList.remove("active");
    loginform.classList.add("active");

});

registerlink.addEventListener('click', () => {
    loginform.classList.remove("active");
    registerform.classList.add("active");

});

// FOR REGISTRATION
let user = document.getElementById('username');
let mail = document.getElementById('email');
let pass = document.getElementById('pass');
let registerbtn = document.getElementById('registerbtn');
let successRegistered = document.getElementsByClassName("successregister")[0];
let failedRegistered = document.getElementsByClassName("failedregister")[0];
registerbtn.addEventListener('click', () => {
    // document.getElementsByTagName("form")[0].setAttribute("action", "https://ahad324.github.io/Portfolio");
    let username = user.value;
    let email = mail.value;
    let password = pass.value;
    if(!(username && email && password)){
        console.log("not ok");
        failedRegistered.classList.add("active");
        setTimeout(() => {
            failedRegistered.classList.remove("active")
        },2000)
        return;
    }
    console.log(username,email, password);

    let data = {
        username: username,
        email: email,
        password: password
    };

    fetch('https://form-with-backend-oj7m.vercel.app/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        successRegistered.classList.add("active")
        setTimeout(() => {
            successRegistered.classList.remove("active")
        },2000)
        user.value=""
        mail.value=""
        pass.value=""
    })
    .catch(err => {
        console.log("Error:", err);
    });
});

// FOR LOGIN
let loginuser = document.getElementById('loginuser');
let loginpass = document.getElementById('loginpass');
let loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener('click', () => {
    // document.getElementsByTagName("form")[0].setAttribute("action", "https://ahad324.github.io/Portfolio");
    let username = loginuser.value;
    let password = loginpass.value;
    console.log(username, password);

    let data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3000/login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(err => {
        console.log("Error:", err);
    });
});