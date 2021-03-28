
function quyDoiTienTe() {
    let moneyOutput = document.getElementById("outputMoney")
    let moneyInput = document.getElementById("numberAcheck").value;
    let moneyOrigin = document.getElementById("from").value
    let moneyAfter = document.getElementById("to").value
    if (moneyInput < 0 && moneyOrigin === "USD" && moneyAfter === "USD" ||
        moneyInput < 0 && moneyOrigin === "USD" && moneyAfter === "VND" ||
        moneyInput < 0 && moneyOrigin === "USD" && moneyAfter === "EURO" ||
        moneyInput < 0 && moneyOrigin === "VND" && moneyAfter === "USD" ||
        moneyInput < 0 && moneyOrigin === "VND" && moneyAfter === "VND" ||
        moneyInput < 0 && moneyOrigin === "VND" && moneyAfter === "EURO" ||
        moneyInput < 0 && moneyOrigin === "EURO" && moneyAfter === "EURO" ||
        moneyInput < 0 && moneyOrigin === "EURO" && moneyAfter === "VND" ||
        moneyInput < 0 && moneyOrigin === "EURO" && moneyAfter === "USD" ) {
        moneyOutput.innerHTML = "Giá Trị lớn hơn 0 hoặc bằng 0"
    } else {
        if (moneyOrigin === "USD" && moneyAfter === "VND") {
            moneyOutput.innerHTML = `${moneyInput * 23085} VND`;
        } else if (moneyOrigin === "USD" && moneyAfter === "EURO") {
            moneyOutput.innerHTML = `${moneyInput * 0.85} EURO`;
        } else if (moneyOrigin === "USD" && moneyAfter === "USD") {
            moneyOutput.innerHTML = `${moneyInput * 1} USD`;
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
            let b = moneyInput / 23085;
            moneyOutput.innerHTML = `${Math.round(b * 100) / 100} USD`;
        }

    }
}