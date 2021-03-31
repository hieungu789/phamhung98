// bài 1
function tinhTongSoNguyen(a, b) {
    let sum = 0;
    if (a > b) {
        let tg = a;
        a = b;
        b = tg
    }
    for (let i = a + 1; i < b; i++) {
        sum = sum + i;
    }
    for (let i = a - 1; i > b; i--) {
        sum = sum + i;
    }
    console.log(sum);
}
// Bài 2
function paramateriza(string) {
    let result = string[0].toLowerCase();
    for (let i = 1; i < string.length; i++) {
        if (string[i] == " ") {
            result += "-";
        }
        else if (string[i - 1] == " " || string[i - 1] == "-") {
            result += string[i]
        }
        else {
            result += string[i];
        }
    }
    return result.toLowerCase();
}
// Bài 3:
function gioPhutGiay(x) {
    let today = new Date();
    let t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(t)
    let a = new Date().getHours();
    let b = new Date().getMinutes();
    let c = new Date().getSeconds();
    c = c + x;
    if (c >= 60) {
        let B = b + Math.floor(c / 60);
        let C = c % 60;
        A = a;
        if (B >= 60) {
            A = a + Math.floor(b / 60);
            B = B % 60;
        }
        console.log(`sau khi nhap gia tri x thoi gian la: ${A}:${B}:${C}`);

    }
    else {
        C = c;
        B = b;
        A = a;
        console.log(`sau khi nhap x thoi gian la: ${A}:${B}:${C}`);

    }
}
// gio:phut:giay -> gio phut giay 
// tong giay = gio *3600+60+giay
// tonggiay+=x
// Bài 4:
function diChuyenCuaOcsen(x, y, h) {
    let hieu = 0;
    let ngay = 0;
    if (x < y || x < 0 && y < 0) {
        return `Mời nhập lại x phải lớn hơn y hoặc x,y lớn hơn 0`;
    } else {
        hieu = x - y;
        ngay = h / hieu;
        console.log("Số ngày con ốc sên leo lên được là", ngay)
    }

}
// Bài 5:
function smallest(num) {
    let freq = Array(10).fill(0);
    while (num) {
        let d = num % 10; // extract last digit
        freq[d]++; // increment counting
        num = parseInt(num / 10); //remove last digit
    }
    let result = 0;
    for (let i = 1; i <= 9; i++) {
        if (freq[i]) {
            result = i;
            freq[i]--;
            break;
        }
    }
    for (var i = 0; i <= 9; i++)
        while (freq[i]--)
            result = result * 10 + i;

    return result;
}
// Bài 6:

function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
genNew.addEventListener("click", setBg);
setBg();