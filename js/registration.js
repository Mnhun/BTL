$(document).ready(function(){      
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
})
// var listCustomer=[]
// function addCustomer(){
//    var name= document.getElementById('txtName').value
//    var numbers= document.getElementById('txtNumbers').value
//    var userID= document.getElementById('txtUserID').value
//    console.log(name)
//    var customer={
//       Name: name,
//       Numbers: numbers,
//       UserID: userID
//    }
//    listCustomer.push(customer)
//    console.log(customer)
//    renderCustomer()
// }
// function renderCustomer(){
//    table=`<tr>
//    <th scope="col">Tên khách hàng</th>
//    <th scope="col">Số điện thoại</th>
//    <th scope="col">Tên tài khoản</th>
//    <th scope="col">Tổng tiền mua</th>
//    <th scope="col">Nợ</th>
//    <th scope="col">Địa chỉ</th>
//  </tr>`
//    for (let i=0; i<listCustomer.length;i++){
//       table +=`<tr>
//       <th scope="col">${listCustomer[i].Name}</th>
//       <th scope="col">${listCustomer[i].Numbers}</th>
//       <th scope="col">${listCustomer[i].UserID}</th>
//       <th scope="col">Tổng tiền mua</th>
//       <th scope="col">Nợ</th>
//       <th scope="col">Địa chỉ</th>
//     </tr>`
//    }
//    document.getElementById('renderCustomer').innerHTML=table
// }