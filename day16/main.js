
function quyDoiTienTe() {
    let moneyInput = document.getElementById("numberAcheck").value;
    let moneyOrigin = document.getElementById("from").value
    let moneyAfter = document.getElementById("to").value
    let moneyOutput = document.getElementById("outputMoney")
    if(moneyOutput<0||!Number.isInteger("numberAcheck")){
        moneyOutput.innerHTML = `Giá Trị phải lớn hơn hoặc bằng 0`;
    }else {
        if (moneyOrigin === "USD" && moneyAfter === "VND") {
            moneyOutput.innerHTML = `${moneyInput * 23.085} VND`;
        } else if (moneyOrigin === "USD" && moneyAfter === "EURO") {
            moneyOutput.innerHTML = `${moneyInput * 0.85} EURO`;
        } else if (moneyOrigin === "USD" && moneyAfter === "USD") {
            moneyOutput.innerHTML = `${moneyInput * 23.085} USD`;
        }
        if (moneyOrigin === "EURO" && moneyAfter === "VND") {
            moneyOutput.innerHTML = `${moneyInput * 27400} VND;`
        } else if (moneyOrigin === "EURO" && moneyAfter === "USD") {
            moneyOutput.innerHTML = `${moneyInput * 1.38} USD`;
        } else if (moneyOrigin === "EURO" && moneyAfter === "EURO") {
            moneyOutput.innerHTML = `${moneyInput * 1} EURO`;
        }
        if (moneyOrigin === "VND" && moneyAfter === "VND") {
            moneyOutput.innerHTML = `${moneyInput * 1} VND`
        } else if (moneyOrigin === "VND" && moneyAfter === "EURO") {
            let a = moneyInput / 27400;
            moneyOutput.innerHTML = `${Math.round(a * 100) / 100} EURO`;
        } else if (moneyOrigin === "VND" && moneyAfter === "USD") {
            let b =moneyInput / 23085;
            moneyOutput.innerHTML = `${Math.round(b * 100) / 100} USD`;
        }
    }
}