window.onload = function(){
    login();
    console.log('ok');
}
function login(){
    document.getElementById('login').style.display = "block";
    document.getElementById('register').style.display = "none";
    document.getElementById('btn1').style.background = "#fff";
    document.getElementById('btn2').style.background = "#EBEEF5";
}
function register(){
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "block";
    document.getElementById('btn2').style.background = "#fff";
    document.getElementById('btn1').style.background = "#EBEEF5";
}