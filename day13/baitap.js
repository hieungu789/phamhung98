// bài 1:

let people = [
    { name: "Hà", age: 35, },
    { name: "Thắng", age: 25, },
    { name: "Tuấn", age: 23, },
    { name: "Thảo", age: 19, },
    { name: "Hưng", age: 27, },
    { name: "Giang", age: 25, },

];

console.log(avgage)
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
    // str = str.toLowerCase()
    // chuyển thành array, reverse rồi so sánh
    return str === str.split('').reverse().join('')
}
palindrome('racecar')
// bài 5:
function consoLea(arr) {
    var max = arr[0].length;
    arr.map(v => max = Math.max(max, v.length));// tìm Phần tử có độ dài lớn nhất
    result = arr.filter(v => v.length == max);//lấy ra phần tử có độ dài lớn nhất
    return result;
}
consoLea(["abg", "aa", "ad", "c", "vcd"])

