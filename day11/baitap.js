// bài 1:Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).
function perfectNumber(N){
    let sum;
    if(N<0){
        return`Sai rồi mời nhập lại`
    }
    for(let i = 2; i <= N; i++) // chạy từ 2 đến số đã cho
    {
        sum = 1;
        for(let j = 2; j <= i/2; j++)//Vòng for để lấy ước 
        {
            if(i%j == 0)
                sum += j; // cộng các ước lại
        }
        if(sum == i)
            console.log(`Số hoàn hảo là`,i)
    }
}
perfectNumber(1000)
// Bài 2: Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
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
}
function KiemTraSoChan(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            console.log("Số Chẵn ở vị trí cuối cùng", arr[i])
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
// giảm dầm
function GiamDan(numArray) {
    numArray.sort(function (a, b) {
        return b - a;
    });
    console.log(numArray);
}