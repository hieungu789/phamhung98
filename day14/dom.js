// getElementById(tenID) Để lấy phần tử có id tương ứng
// inerHTML là nội dung của element
// document.getElementById("demo").innerHTML = " Xin chào các bạn tôi là DOM";

// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// let hello = document.getElementById("demo")
// hello.innerHTML ="hello world"
// hello.style.color ="blue";
// hello.style.textAlign ="center"
// hello.style.background ="yellow"
// function pressOnClick(){
//     hello.innerHTML = "hi you";
//     hello.style.color = "red";
// }
let random = Math.floor(Math.random() * 100);
let alertMessage = document.getElementById("alert")
alertMessage.style.fontSize = "x-large"
let resultMessage = document.getElementById("result")
let count = 10;
function guess() {
    let numberAcheck = document.getElementById("numberCheck").value;
    console.log(random, numberAcheck)
    if (numberAcheck < 0 || numberAcheck > 100) {
        alertMessage.innerHTML = "Vui lòng nhập lại"
        alertMessage.style.color = "red"
    } else {
        count--;
        if (numberAcheck > random) {
            alertMessage.innerHTML = "Hơi lớn nhỏ hơn tí nữa"
            alertMessage.style.color = "blue"
        } else if (numberAcheck < random) {
            alertMessage.innerHTML = "Hơi nhỏ thêm tí nữa"
            alertMessage.style.color = "yellow"
        } else {
            alertMessage.innerHTML = "Đúng rồi bạn ơi Bạn chơi đồ phải không"
            alertMessage.style.color = "green"
            document.getElementById("Mybtn").disabled =true;
        }
        resultMessage.innerHTML += `Lần đoán thứ: ${count} ---- Số dự đoán là: ${numberAcheck}` + "<br>"
    }
    if(count === 0){
        document.getElementById("Mybtn").disabled =true;
        alertMessage.innerHTML="Hết lượt rồi thua phải trồng cây chuối năm phút"
    }        
}
function choiLai(){
    location.reload();
}

  
