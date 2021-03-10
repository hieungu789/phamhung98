// console.log("Hello main.js");
//chú thích 1 dòng
/*
Chú thích nhiều dòng
 */
/**
1.Number
 -Số Nguyên, số thực
 infinity
 Nan(not a Number)
*/
/**
 * String
 * dat trong dau nhya don
 * dat trong dau nhay kep
 * dat trong dau backtick $'{1+3}'
 */
/**
 * boolean
 * chi co 2 gia tri dung hoac sai (true/false)
 */

/**
 * null
 * - null la mot bien/ doi tuong no trong , no khong co gi
 * 
 */

/**
 * undefined
 * 1 bien hang so ma da duoc khai bao, chua duoc khoi tao thi no mang gia tri undefined
 */
/**
 * ham so function
 */
// function senEmail(){
//     console.log("this is a function")
// }
// senEmail();

// function getAMessage(from, message= "khong co noi dung"){
//     console.log(from + ":"+message)
// }
// getAMessage("John")
// function getABox(){
//     return "this is a box"
// }
// let box = getABox();

// function hello(){
//     alert("Xin chào các bạn")
// }
// hello();

// function helloa(name){
//     console.log("xin chao " + name)
// }
// helloa("Hung")
// function helloab(name){
//     console.log(`xin chao"${name}"`)
// }
// helloab("Hung")



// bai 1:nhap do c roi den do f
function Doido_C(Celsius,Fahrenheit){
    let C,F,a,b;
    F = ((Celsius*1.8)+32)
    a= Math.round(F * 10)/10
    console.log("do F:",a)
    C =((Fahrenheit-32)/1.8)
    b= Math.round(C * 10)/10
    console.log("do C:",b)
}
Doido_C(30,16)
// bai2:Viết hàm chuyển đổi tiền tệ: chuyển đổi từ USD, Euro sang VNĐ và ngược lại 
function convert(sotienvnd,sotien){
    let usd , euro ,VND_usd,VND_euro,a,b;
    usd = sotienvnd*23200
    euro = sotienvnd*27600
    VND_usd=(sotien/23200)
    VND_euro=(sotien/27600)
    a= Math.round(VND_usd * 100)/100
    b=Math.round(VND_euro * 100)/100
    console.log("tien usd",usd)
    console.log("tien euro",euro)
    console.log("tien usd sang tien viet:",a)
    console.log("tien euro sang tien viet",b)
}
convert(5,30000)
// bai 3:
function theki(number){
    let z;
    z = Math.floor((number/100)+1)
    console.log("The ki:",z)
}
theki(2021)