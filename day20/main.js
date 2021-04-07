let in_ra = document.querySelector("#gia_tri_xuat")
let con_so = Array.from(document.querySelectorAll(".con_so"))
con_so.forEach(function (btn) {
    btn.addEventListener("click", function () {

        if (in_ra.innerHTML == "0") {
            in_ra.innerHTML = "";
        }
        if (btn.innerHTML == "AC") {
            in_ra.innerHTML = "0";
        }
        else if (btn.innerHTML == "CE") {
            var arrText = Array.from(in_ra.innerHTML);
            arrText.splice(arrText.length - 1, 1);
            if (arrText.length != 0)
                in_ra.innerHTML = arrText.join("");
            else
                in_ra.innerHTML = "0";
        }
        else if (btn.innerHTML == "=") {
            in_ra.innerHTML = eval(in_ra.innerHTML)
        }
        else {
            in_ra.innerHTML += btn.innerHTML
        }
    })
})