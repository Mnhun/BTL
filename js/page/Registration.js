
$(document).ready(function(){   
    
    $('#txtName').focusout(function(){
        var  nameRegex = /^[a-zA-Z\s]+$/;
        if (nameRegex.test($('#txtName').val())){
            $('#nameError').text('Họ tên hợp lệ.') 
            $('#nameError').css('color','blue')
        }
        else{
            $('#nameError').text('Họ tên không hợp lệ.') 
            $('#nameError').css('color','red')
        }
    })

    $('#txtNumbers').focusout(function(){
        var  numbersRegex = /^[0-9]{10}$/;
        if (numbersRegex.test($('#txtNumbers').val())){
            $('#numbersError').text('Số điện thoại hợp lệ.') 
            $('#numbersError').css('color','blue')
        }
        else{
            $('#numbersError').text('Số điện thoại không hợp lệ. 10 chữ số từ 0-9') 
            $('#numbersError').css('color','red')
        }
    })

    $('#txtUserID').focusout(function(){
        var  userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test($('#txtUserID').val())){
            $('#userIDError').text('Tên tài khoản hợp lệ') 
            $('#userIDError').css('color','blue')
        }
        else{
            $('#userIDError').text('Tên tài khoản không hợp lệ. Độ dài từ 5-12') 
            $('#userIDError').css('color','red')
        }
    })
    
    $('#txtPassword').focusout(function(){
        var  passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtPassword').val())){
            $('#passwordError').text('Mật khẩu hợp lệ') 
            $('#passwordError').css('color','blue')
        }
        else{
            $('#passwordError').text('Mật khẩu không hợp lệ. Độ dài từ 7-12.') 
            $('#passwordError').css('color','red')
        }
    })  
})