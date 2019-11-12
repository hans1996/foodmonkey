
function readCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

if (!readCookie('userName') || readCookie('userName') == "null") {
    // $('#login').show();
    // $('#changePass').hide();
    // $('#username').hide();
    // $('#logout').hide();
}
else {
//     $('#login').hide();
//     $('#changePass').show();
//     $('#username').show();
    $('#username').text("UserName : " + readCookie('userName'));
    // $('#logout').show();
}

//登出功能
function logout() {
    $.removeCookie("userName");
    location.href="staff.html";
}
