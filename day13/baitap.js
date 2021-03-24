// bài 1:
let people = [
    { name: "Hà", age: 35, },
    { name: "Thắng", age: 25, },
    { name: "Tuấn", age: 23, },
    { name: "Thảo", age: 19, },
    { name: "Hưng", age: 27, },
    { name: "Giang", age: 25, },

];

function ageAvg(arrays) {
    let sum = 0;
    let avg = 0;
    for (let i of arrays) {
        console.log(i.age)
        sum = sum + i.age

    }
    console.log("sum:", sum)
    avg = sum / arrays.length
    return Math.floor(avg)
}

console.log("Avg", ageAvg(people))
// bài 2:Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp
let user = [
    {
        name: "hà phạm",
        age: 35,
    },
    {
        name: "thắng",
        age: 25,
    },
    {
        name: "tuấn",
        age: 23,
    },
    {
        name: "thảo",
        age: 19,
    },
    {
        name: "hưng",
        age: 27,
    },
    {
        name: "giang",
        age: 24,
    },
    {
        name: "tuấn anh",
        age: 25,
    },]
user.sort((a, b) => b.age - a.age)
console.log(user)
// bài 3:
// function bouncer(arr) {
//     return arr.filter(Boolean);
//  }
// bouncer([false, null,24, undefined, NaN, 0,"",1,2])
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
bouncer([false, true, null, 24, undefined, NaN, 0, "", 1, 2])
//bài 4
let palindrome = str => {
    // chuyển qua lowercase trước
    str = str.toLowerCase()
    // chuyển thành array, reverse rồi so sánh
    return str === str.split(" ").reverse().join("")
}
palindrome('Racecar')
// function kiemTraChuoiDoiXung(str) {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr = reverseStr + str[i];
//     }
//     reverseStr = reverseStr.split(" ").join("").toLowerCase();
//     let newStr = str.split(" ").join("").toLowerCase();

//     if (newStr === reverseStr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// bài 5:
function consoLea(arr) {
    var max = arr[0].length;
    arr.map(v => max = Math.max(max, v.length));// tìm Phần tử có độ dài lớn nhất
    result = arr.filter(v => v.length == max);//lấy ra phần tử có độ dài lớn nhất
    return result;
}
consoLea(["abg", "aa", "ad", "c", "vcd"])
// function max(arr) {
//     var max = arr[0].length;
//     for (i = 1; i < arr.length; i++) {
//         if (max < arr[i].length) {
//             max = arr[i].length
//         }
//     }
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         if (max === arr[i].length) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// max(["abg", "aa", "ad", "c", "vcd"])
