// bài tập 1:
function doVui(n) {
    
}

// bài 2
function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi dữ liệu rồi nhập lại đi");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            // document.write("* ");
            str += "&#32;*"
        }
        str += "<br/>"
        // document.write("<br />")
    }
    document.write(str)
}
drawRectangle(4, 5)
// bài 3:
function drawEmptyRectangle(m, n) {
    document.writeln("<br>")
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi dữ liệu nhập lại đi");
        return;
    }
    let str = "";
    for (let x = 0; x < m; x++) {
        str += "* "
    }
    for (let i = 1; i < n - 2; i++) {
        str += "<br>"
        for (let j = 0; j < m; j++) {

            if (j === 0 || j === m - 1) {
                str += "* ";
            } else {
                str += "* ".fontcolor("white");
            }
        }
    }
    str += "<br>"
    for (let x = 0; x < m; x++) {
        str += "* ";
    }
    document.write(str);
}
drawEmptyRectangle(4, 5)
document.write("<br>")
// bai 4
function veTamGiacVuong(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu rồi nhập lại đi");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        str += "<br>"
        for (let j = 0; j <= i; j++) {

            str += "* ";
        }
    }
    str += "<br>"
    document.write(str)
}
veTamGiacVuong(5)
// bài 5 vẽ tam giác cân ngược
document.write("<br>")
function veTamGiacCan(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu rồi nhập lại đi");
        return;
    }
    let str = "";
    for (let i = 1; i <= m; i++) {
        str += "<br>"
        for (let j = 1; j < i; j++) {
            str += "* ".fontcolor("white")
        }
        for (j = 0; j < (m * 2 - (2 * i - 1)); j++) {
            str += "* "
        }
    }
    str += "<br>"
    document.write(str)
}
veTamGiacCan(4)
// vẽ hình thoi\
function veTamGiacVuongTwo(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu rồi nhập lại đi");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        str += "<br>"
        for (let j = 0; j <= i; j++) {

            str += "* ";
        }
    }
    for (let i = 0; i < m; i++) {
        str += "<br>"
        for (let j = m; j > i; j--) {

            str += "* ";
        }
    }
    document.write(str)
}
veTamGiacVuongTwo(5)
function veTamGiacCanTwo(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu rồi nhập lại đi");
        return;
    }
    let str = "";
    for (let i = 1; i <= m; i++) {
        str += "<br>"
        for (let j = 0; j < m- i; j++) {
            str += "* ".fontcolor("white")
        }
        for (j = 0; j < (2*i-1); j++) {
            str += "* "
        }
    }
    for (let i = 1; i <= m; i++) {
        str += "<br>"
        for (let j = 1; j < i; j++) {
            str += "* ".fontcolor("white ")
        }
        for (j = 0; j < (m * 2 - (2 * i - 1)); j++) {
            str += "* "
        }
    }

    document.write(str)
}
veTamGiacCanTwo(5)