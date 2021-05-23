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
    let formDataItem ={
        name :name,
        ngaysinh:ngaysinh,
        email:email,
        phone:phone
    }
    console.log(formDataItem)
    createCourse(formDataItem)

});
let courseApi = 'https://rossius-hung.herokuapp.com/users'
function createCourse(data,callback) {
    let formData = {
        method: 'POST',
        Headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch(courseApi,formData)
        .then(function(loadDocJQuery){
            loadDocJQuery.json();
        })
        .then(callback);            
        
}

function loadDocJQuery() {
    $.ajax("https://rossius-hung.herokuapp.com/users", {
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
function editor(){
    $('header').addClass('hide');
    $('.form-edit').addClass('show');
}
function deleteEdit(id) {
    let formData = {
        method: 'DELETE',
        Headers: {
            'Content-Type' : 'application/json'
        },
    };
    fetch(courseApi+'/'+id,formData)
        .then(function(loadDocJQuery){
            loadDocJQuery.json();
        })
        .then(function(){
            loadDocJQuery();
        });            
        
}