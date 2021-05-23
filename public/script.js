$('.add-student').click(function () {
    $('header').addClass("hide");
    $('.form-add').addClass('show');
});
$('.back').click(function () {
    $('.form-add').removeClass('show');
    $('header').removeClass('hide');
    $('header').addClass("show");
    $('.form-edit').removeClass('show');
    $('header').removeClass('hide');
    $('header').addClass("show");
});
let isEmailAddress = email => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
}
let courseApi = 'http://localhost:3000/users';
function loadDocJQuery() {
    $.ajax(courseApi, {
        method: "GET"
    }).done(function (users) {
        let content = "";

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            content += `<tr>
                <td>${user.name}</td>
                <td>${user.ngaysinh}</td>
                <td>${user.email}</td>
                <td>${user.phone} </td>
                <td class="fix-student">
                            <div class="edit">
                                <i class="fas fa-edit"></i>
                                <span onclick=editor()>Chỉnh sửa</span>
                            </div>
                            <div class="border-a"></div>
                            <div class="delete">
                                <i class="far fa-trash-alt"></i>
                                <span onclick=deleteEdit(${user.id})>Xóa</span>
                            </div>
                        </td>
                </tr>`;
        }
        $("#table-users").html(content);
    });
}
$(function () {
    loadDocJQuery();
});
$('.save').click(function () {
    let name = $('#name').val();
    let ngaysinh = $('#ngaysinh').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    // Name
    if (_.isEmpty(name)) {
        name = "";
        $('#name-error').text('Vui lòng nhập họ và tên')
    } else if (name.trim().length <= 2) {
        name = "";
        $('#name-error').text('Họ và tên không được nhỏ hơn 2 kí tự')
    } else if (name.trim().length > 50) {
        name = "";
        $('#name-error').text('Họ và tên quá dài')
    }
    else {
        $('#name-error').text('')
    }
    // Ngày Sinh
    if (_.isEmpty(ngaysinh)) {
        ngaysinh = ""
        $('#ngaysinh-error').text('Vui lòng nhập Ngày tháng năm sinh')
    }
    else {
        $('#ngaysinh-error').text('')
    }
    // Email
    if (_.isEmpty(email)) {
        email = "";
        $('#email-error').text('Vui lòng nhập Email')
    } else if (!isEmailAddress(email)) {
        email = "";
        $('#email-error').text('Sai Định dạng')
    }
    else {
        $('#email-error').text('')
    }
    // Phone
    if (_.isEmpty(phone)) {
        phone = "";
        $('#phone-error').text('Vui lòng nhập Số điện thoại')
    } else if (phone.trim().length > 10) {
        phone = "";
        $('#phone-error').text('Không được quá 10 số')
    } else if (phone.trim().length < 10) {
        phone = "";
        $('#phone-error').text('Không nhỏ hơn  10 số')
    }
    else {
        $('#email-error').text('')
    }
    //   $.ajax(courseApi,{
    //       method:"POST"
    //   }).done(function(users){

    //   })
   let agrs = {
        url: courseApi, // gửi ajax đến file result.php
        type: "POST", // chọn phương thức gửi là post
        dataType: "text", // dữ liệu trả về dạng text
        data: { // Danh sách các thuộc tính sẽ gửi đi
            name: name,
            ngaysinh: ngaysinh,
            email: email,
            phone: phone
        },
        success: function (result) {
            // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
            // đó vào thẻ div có id = result
            $('#table-users').html(result);
        }
    };

    // Truyền object vào để gọi ajax
    $.ajax(agrs);
});


function editor() {
    $('header').addClass('hide');
    $('.form-edit').addClass('show');
}

function deleteEdit(id) {
    let formData = {
        method: 'DELETE',
        Headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, formData)
        .then(function (loadDocJQuery) {
            loadDocJQuery.json();
        })
        .then(function () {
            loadDocJQuery();
        });

}