// bài 1:function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
    document.getElementById("wordNumber1").style.color = "green"
    document.getElementById("wordNumber2").style.color = "yellow"
    document.getElementById("wordNumber3").style.color = "red"
}
changeColor()
// baì 2:function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBackground(color) {
    document.body.style.background = color;
}
changeBackground('violet');
// bài 3:unction copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).
function copyContent(paragraph1, paragraph2) {
    document.getElementById(paragraph1).innerHTML =
        document.getElementById(paragraph2).innerHTML;
}
copyContent("wordNumber1", "wordNumber2")
// bài 4:function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
    let arr = document.getElementsByTagName("p")
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = x + "px";
    }
}
changeFontSize(18)
// // bài 5:function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
// function increaseFontSize(paragraph) {
//     let font = document.getElementById(paragraph);
//         if (font.style.fontSize < 30) {
//             font.style.fontSize = (font.style.fontSize + 5) + "px"
//         }
// }
// increaseFontSize("wordNumber1")
function increaseFontSize(paragraph) {
    let font = document.getElementById(paragraph);
    let fontSizeNumber = parseFloat(font.style.fontSize);
    if (fontSizeNumber < 30) {
      font.style.fontSize = (fontSizeNumber + 1) + 'px'
    }
  }
  increaseFontSize('wordNumber1');
// bài 6:
function decreaseFontSize(paragraph) {
    let font = document.getElementById(paragraph);
    let fontSizeNumber = parseFloat(font.style.fontSize);
    if (fontSizeNumber >= 10) {
        font.style.fontSize = (fontSizeNumber - 1) + "px"
    }
}
decreaseFontSize('wordNumber2');