function signup(){
    var email = document.getElementById('semail').value;
    var pass = document.getElementById('spass').value;
    localStorage.setItem('Email',email);
    localStorage.setItem('password',pass);
    window.location.href = './signIn.html';
}

function signin(){
    var email = document.getElementById('lemail').value;
    var pass = document.getElementById('lpass').value;
    if(localStorage.getItem('Email') == email && localStorage.getItem('password') == pass){
        window.location.href = './welcome.html'
    }
    // else{
    // alert('invalid user name password  ..');
    // window.location.href = './index.html'
    // }
}


function redirectToSignUp() {
    window.location.href = './index.html';
}

function redirectToSignIn() {
    window.location.href = './signin.html';
}