$(document).ready(
    function () {
        login();
        console.log('ok');

    }
);
function checkMsg() {
    var checkmsg = setInterval(function () {
        if ($("#msg").html() != "") {
            setTimeout(function () {
                $("#msg").html("");
            }, 3000);
        }
    }, 100);
}
function login() {
    $("#login").css("display", "block");
    $("#register").css("display", "none");
    $('#btn1').css('background', '#fff');
    $('#btn2').css('background', '#EBEEF5');
    $("#msg").html("");
}
function register() {
    $("#register").css("display", "block");
    $("#login").css("display", "none");
    $('#btn2').css('background', '#fff');
    $('#btn1').css('background', '#EBEEF5');
    $("#msg").html("");
}
function reset1() {
    $("#msg").html("");
}
function checkLogin() {
    var usr = $("input#usr").val();
    var passwd = $("input#passwd").val();
    if (usr == 'meng' && passwd == '12345678') {
        $("#msg").html("登陆成功！");
    }
    else {
        $("#msg").html("用户名或密码错误！");
    }
    $("button#reset1").click();
}
function checkRegister() {
    //var passwd0 = $('#passwd0').val();
    //var usr1 = $("#usr1").val();
    var email = $("#email").val();
    if ((checkPasswd()) && (checkPhone()) && (checkEmail())) {
        $("#msg").html("注册成功！");
        $(".btns1 button")[1].click();
        $(".btns1 button")[2].click();
    }
    else {
        //$("#msg").html("请检查所填信息格式是否有误！");
        //$("#usr1").focus();
    }
}
function checkPhone() {
    //手机号码
    var isMob = /^1(3|4|5|6|7|8|9)\d{9}$/;
    var obj = document.getElementById("usr1"); //要验证的对象
    if (obj.value.trim() === "") { //输入不能为空
        $("#msg").html("手机号输入不能为空!");
        $("#usr1").focus();
        return false;
    } else if (!isMob.test(obj.value.trim())) { //正则验证不通过，格式不对
        $("#msg").html("手机号格式不正确!");
        $("#usr1").focus();
        return false;
    } else {
        //$("#msg").html("通过！");
        return true;
    }
}
function checkPasswd() {
    var passwd0 = $('#passwd0').val();
    var passwd1 = $('#passwd1').val();
    if (passwd0 == "") {
        $("#msg").html("密码不能为空");
        $("#passwd0").focus();
        return false;
    }
    else {
        if (passwd0 != passwd1) {
            $("#msg").html("两次输入密码不一致！");
            $("#passwd0").focus();
            return false;
        }
        else {
            return true;
        }
    }

}
function checkEmail() {
    //定义正则表达式的变量:邮箱正则
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var email = $("#email").val();
    if (email == '') {
        $("#msg").html('email不能为空！');
        $("#email").focus();
        return false;
    }
    else {
        if (email.search(reg) != -1) {
            return true;
        }
        else {
            $("#msg").html("邮箱格式有误！");
            $("#email").focus();
            return false;
        }
    }
}
