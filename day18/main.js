let today = new Date();
function quyDoiTienTe() {
    let inputYear = document.getElementById("numberAcheck").value
    let outputyear = document.getElementById("outputYear")

    if (inputYear > today.getFullYear() || inputYear < 0 || inputYear == 0) {
        outputyear.innerHTML = "Mời nhập lại hoặc kiểm tra lại năm vừa nhập"
    } else {
        let tuoi = today.getFullYear() - inputYear
        if (tuoi > 120) {
            outputyear.innerHTML = `Chúc mừng bạn là người Cao tuổi `
        } else if (tuoi < 120) {
            outputyear.innerHTML = `${today.getFullYear() - inputYear} Tuổi `
        }
    }
}
function BMI() {
    let a = document.getElementById("numberOne").value;
    let inputBMIcao = document.getElementById("numberBcheck").value / 100;
    let outputBMI = document.getElementById("outputBMI");
    console.log(a)
    console.log(inputBMIcao)

    if (a > 500 && inputBMIcao > 2 || a < 0 ||inputBMIcao < 0 || inputBMIcao == 0 && a == 0) {
        outputBMI.innerHTML = "Mời nhập lại hoặc kiểm tra Cân nặng và chiều cao vừa nhập"
    } else {
        let c = a / (inputBMIcao * inputBMIcao)
        // outputBMI.innerHTML = `Chỉ số BMI là: ${Math.round(c * 100) / 100} BMI`
        if (c >= 18 && c <= 22) {
            outputBMI.innerHTML = `Chỉ số BMI là: ${Math.round(c * 100) / 100} BMI <br> Ngoại hình quá Đẹp`
        } else if (c < 18) {
            outputBMI.innerHTML = ` Chỉ số BMI là: ${Math.round(c * 100) / 100} BMI <br> Ngoại hình Suy dinh dưỡng`
        } else {
            outputBMI.innerHTML = ` Chỉ số BMI là: ${Math.round(c * 100) / 100} BMI <br> Ngoại hình Hơi nặng 1 tý`
        }
    }
}