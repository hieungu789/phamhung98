document.write("Làm bài tập vẽ hình");
document.write("<br>")
document.writeln("bai 1: Vẽ hình chữ nhật đặc (kích thước mxn: m,n > 0)");
function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi con bò nhập lại đi");
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

function drawEmptyRectangle(m, n) {
    document.writeln("<br>")
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi con bò nhập lại đi");
        return;
    }
    let str = "";
    for (let x = 0; x < m; x++) {
        str += "* "
    }
    for (let i = 1; i < n - 2; i++) {
        str += "<br>"
        for (let j = 0; j < m; j++) {
            
            if (j === 0 || j === m-1) {
                str += "* ";
            } else {
                str += "* ".fontcolor("red");
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
function doVui(n){
    let bienDem =0;
    for(i=1;i<n;i++){
        if(n%i===0){
            bienDem++
        } 
    }
    console.log(bienDem)
}