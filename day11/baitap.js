// bài 1:Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).
function perfectNumber(N) {
    let sum;
    if (N < 0) {
        return `Sai rồi mời nhập lại`
    }
    for (let i = 2; i <= N; i++) // chạy từ 2 đến số đã cho
    {
        sum = 1;
        for (let j = 2; j <= i / 2; j++)//Vòng for để lấy ước 
        {
            if (i % j == 0)
                sum += j; // cộng các ước lại
        }
        if (sum == i)
            console.log(`Số hoàn hảo là`, i)
    }
}
perfectNumber(10000)
// Bài 2: Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Giá Trị lớn nhất là: ", max);
    console.log("Giá trị nhỏ nhất là: ", min)
}
// bài 3: Tìm số lớn thứ 2 trong mảng số nguyên
function getSecondLargest(nums) {
    nums.sort(function (x, y) { //sắp xếp theo thứ tự giảm dần
        return y - x;
    });
    for (var j = 1; j < nums.length; j++) {
        if (nums[j - 1] !== nums[j]) {// lấy ra số thứ 2
            return nums[j];
        }
    }
}
getSecondLargest([1, 7, 2, 4, 8, 5])
// bài 4: Trả về Vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.
function kiemTraViTri(Array) {
    for (let i = 0; i <= Array.length; i++) {
        if (Array[i] % 2 !== 0) {
            console.log("Số lẻ ở vị trí đầu tiên", Array[i])
            break;
        }
    }
    for (let j = Array.length - 1; j >= 0; j--) {
        if (Array[j] % 2 == 0) {
            console.log("Số Chẵn ở vị trí cuối cùng", Array[j])
            break;
        }
    }
}
// bài 5:  In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH)
function reverseString(str) {
    let a = "";// gán cho kí tự trống
    for (let i = str.length - 1; i >= 0; i--) {
        a += str[i];
    }
    console.log("Chữ đảo ngược là: ", a)
}
// bài 6:  Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần.
//  tăng dần 
function TangDan(numArray) {
    numArray.sort(function (a, b) {
        return a - b;
    });
    console.log(numArray);
}
//
function tangDan(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) //Tăng dần or Giảm dần a[i]<a[j]
            {
                k = arr[i];  //k là biến tạm lưu giá trị
                arr[i] = arr[j];  //thực hiện đổi chỗ lấy a[j]
                arr[j] = k;  //thực hiện đổi chỗ lấy a[i]
            }
        }
        console.log(arr[i])
    }
}
// giảm dầm
function GiamDan(numArray) {
    numArray.sort(function (a, b) {
        return b - a;
    });
    console.log(numArray);
}
// 
function giamDan(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) //Tăng dần or Giảm dần a[i]<a[j]
            {
                k = arr[i];  //k là biến tạm lưu giá trị
                arr[i] = arr[j];  //thực hiện đổi chỗ lấy a[j]
                arr[j] = k;  //thực hiện đổi chỗ lấy a[i]
            }
        }
        console.log(arr[i])
    }
}
function giaiThua(n) {
    let multiply = 1;
    if (n < 0 || Number.isInteger(n) === false) {
        return `Mời nhập lại`;
    }
    for (let i = 1; i <= n; i++) {
        multiply *= i
    }
    console.log("Số Giai thừa là:", multiply)
}
function doVui(n){
    let bienDem =0;
    for(i=1;i<n;i++){
        if(n%i===0){
            bienDem++
        } 
    }
    console.log(bienDem)
}