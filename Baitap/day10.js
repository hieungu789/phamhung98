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
CheckMonth(2, 1800)
// Bài 3: Tính tổng các chữ số trong 1 số nguyên dương
function songduong(value){

    let sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
}
// bài 4 In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)
function Splitstring(n) {
    let str = n.length;

    let ves = n.substring(0, 10);
    if (str > 10) {
        console.log("Chuỗi cắt là", ves + "...")
        console.log("Độ dài chuỗi", str)
    }
    else {
        console.log(n)
    }

}
Splitstring("tôi học ở techmaster ")
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
// function avs(a) {
//     if (a < 1) {
//         return `Sai mời nhập lại`
//     }
//     if (a === 2) {
//         return `Là số nguyên tố`
//     }
//     let test = 1;
//     for (let i = 2; i < a; i++) { // chạy i = 2 đến i = số a vừa nhập
//         if (a % i === 0) {
//             test++;// test là biến đếm sô lần a%i==0

//         }
//     }
//     if (test === 1) {
//         console.log(a + ": Là số nguyên tố");
//     }
//     else {
//         console.log(a + ": Không phải là số nguyên tố");
//     }
// }
// function bai6(a, b) {
//     for (i = a; i <= b; i++) {
//         let test = 1;
//         for (j = 2; j <= i / 2; j++) {
//             if (i % j == 0) {
//                 test = 0;
//                 // break;
//             }
//         }
//         if (test == 1) {
//             console.log(i + " : là số Nguyên tố");
//         }
//         else {
//             console.log(i + " : không phải là sô nguyên tố");
//         }
//     }
// }

// function bai5(n) {
//     if(n<1){
//         return `Mời nhập lại`
//     }
//     let test = 1
//     for (i = 2; i <= n; i++) {
//         let test = 1;
//         for (j = 2; j <= i / 2; j++) {
//             if (i % j == 0) {
//                 test = 2;
//                 // break;
//             }
//         }
//         if (test == 1) {
//             console.log(i + " : là số Nguyên tố");
//         }
//         // else {
//         //     console.log(i + " : không phải là sô nguyên tố");
//         // }
//     }
// } 
// function adjacentElementsProduct(inputArray) {
//     var c =inputArray[0]*inputArray[1];
//     var p = c;
//     for(var i=1;i<inputArray.length;i++){
//         console.log(c);
//         var c=inputArray[i]*inputArray[i+1];
//         if(c > p){
//             p=c;
//         };
//     };
//     return p;
// };
// console.log("minimum product = " + adjacentElementsProduct([2,4,-3,8,2]));

function adjacentElementsProduct(inputArray) {
    let max = -Infinity;
    for (let i = 1; i < inputArray.length; i++) {
        max = Math.max(inputArray[i] * inputArray[i - 1], max);
    }

    return max;
}
console.log("minimum product = " + adjacentElementsProduct([-23, 4, -3, 8, -12]));















































































































































