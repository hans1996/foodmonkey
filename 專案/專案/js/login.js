function login() {
    var _account = $('#account').val();
    var _password = $('#password').val();
    var member= $('#member').val();
    if (!_account || !_password) {
        $('#errormsg').text('請輸入帳號密碼!');
    }
    else {
		 jQuery.support.cors = true;
		$.ajax({
				url: `http://localhost:7001/api/v1/staff?account=${_account}&password=${_password}&member=${member}`,                        // url位置
				type: 'GET',                   // post/get
                // data: { 'account': _account, 'password': _password ,member},       // 輸入的資料
                // dataType: "jsonp",
				//error: function (xhr) { },      // 錯誤後執行的函數
				success: async function (res) {
                    console.log(res)
                   
                    if (!res) {
                        alert("帳號密碼錯誤");
                    }
                    else {

                        function createCookie(name, value, days) {
                            var expires;
                        
                            if (days) {
                                var date = new Date();
                                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                                expires = "; expires=" + date.toGMTString();
                            } else {
                                expires = "";
                            }
                            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
                        }
                        await createCookie('userName', res.account, 10)                        
                        alert('登入成功!'); 

                        if(res.member==="customer")location.href = 'context.html';
                        if(res.member==="shops"){location.href = 'shop.html';}
                        if(res.member==="staffs"){location.href = 'first.html';}
                    } // 成功後要執行的函數
        }});
        // $.ajax({
        //     method: "GET",
        //     url: "htttp://140.117.248.1:7001/api/v1/staff",
        //     data: JSON.stringify({'account': _account, 'password': _password ,member}),
        //     dataType: "json",
        //     contentType: "application/json; charset=utf-8",
        //   }).done( ( data ) => {
        //     console.log(data)  
        //   })
    }
}
// function register() {
//     location.href = '/public/register.html';
// }
