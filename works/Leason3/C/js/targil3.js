function checkPassord() {
    var email = 'userName';
    var passowrd = '1234';
    var emailinput = document.getElementById('emailinput').value;
    var passowrdinput = document.getElementById('passowrdinput').value;
    if (emailinput == email && passowrdinput == passowrd) {
        alert("Welcome Back, you are loged in ^('')^")
    } else {
        alert("Invalid passowrd or Email please Try again ); ")
        document.getElementById('emailinput').innerTEXT = '';
        document.getElementById('passowrdinput').innerTEXT = '';
    }
}