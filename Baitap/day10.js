// Bài 1: Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm
function seasons() {
    let d = new Date();
    let D = d.getDate();
    let m = d.getMonth() + 1;
    let Y = d.getFullYear();
    console.log("Ngày", D + " Tháng", m + " Năm", Y);
    if (3 >= m && m > 1) {
        console.log("Là mùa Xuân")
    } else if (m = 4 && m <= 6) {
        console.log("Là mùa hè")
    } else if (m = 7 && m <= 9) {
        console.log("Là mùa thu")
    } else if (m = 10 && m <= 12) {
        console.log("Là mùa đông")
    }
}
seasons()
//  bài 2 Viết hàm trả về số ngày có trong 1 tháng
function CheckMonth(n, nam) {
    if (n < 0 || n > 12 || nam < 0) {
        return "Không có tháng hoặc năm này"
    }
    let a;
    if (n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12) {
        console.log("Là tháng có 31 ngày")
    } else if (n === 4 || n === 6 || n === 9 || n === 11) {
        console.log("Là tháng có 30 ngày")
    } else if (n === 2) {
        // Kiểm tra năm nhuận hay không nếu nhuận có 29 ngày còn k thì là 28 ngày
        if (a = ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0)) {
            console.log("Năm nhuận và có 29 ngày")
        } else {
            return "năm không nhuận và có 28 ngày"
        }
    }
}
CheckMonth(2, 2016)
// Bài 3: Tính tổng các chữ số trong 1 số nguyên dương
// nhập 5 thì sẽ là 1+2+3+4+5
function integerr(n) {
    if(n == 0) // điều kiện dừng 
    return 0;
  return n + integerr(n-1);

}
// bài 4 In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)
function Splitstring(n) {
    let str = n.length;
    let ves = n.substring(0, 10);
    console.log("Độ dài chuỗi vừa nhập là", str)
    console.log(ves, "...")
}
Splitstring("tôi học lớp web ở techmaster")
/** bài 5 Viết hàm có tính năng translate. 
 * Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ: 
 * French, Hawaiian, Germany, Italy, Croatia. Nếu không nhập gì chúng tôi có thể cho rằng bạn 
 * muốn nói biết ở Việt Nam. Hàm sẽ in ra lời chào theo đất nước tương ứng.*/
function translate(n) {

    switch (n) {
        case "French":
            console.log("Bonjour");
            break;
        case "Hawaiian":
            console.log("aloha");
            break;
        case "Germany":
            console.log("Hallo")
            break;
        case "Italy":
            console.log("Ciao")
            break;
        case "Croatia":
            console.log("zdravo")
            break;
        default:
            console.log("Xin chào")
    }
}
translate("French")