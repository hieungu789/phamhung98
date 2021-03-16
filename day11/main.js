// for(let i =0;i<10;i++){
//     console.log(i)
// }
// let i =0;
// while (i<10) {
//     console.log(i)
//     i++;
// }
// function lietke(b){
//     if(b<0||b>50){
//         return `mời nhập lại`
//     }
//     let dem =0
//     for(let i=0;i<=b;i++){
//         if(i%5===0){
//             dem++
//             console.log("Số chia hết cho 5 là:",i)
//         }

//     }
//     console.log("Có tất cả",dem,"những số chia hết" )
// }

let array = [1, 2, 3]
let names = ["hung", "quan", "duc", "tinh", "ngu"]
// duyet mang
for (let i = 0; i < names.length; i++) {
    console.log(`toi ten la ${names[i]}`);
}
for (let index in names) {
    console.log(`Index la ${index} va item la ${names[index]}`);
}
for (let item in names) {
    console.log(item)
}
names.push("tuan anh")
console.log(names)
array.pop(); // dung ham pop de lay ra (xoa) mt phan tu cuoi mang
console.log(array)
// 
function check(array) {
    for (let i in array) {
        if (array[i] < 0) {
            array[i] = 0
        }
    }
    return array;
}
function dax(n){
    for(let i =0; i<=n;i++){
        for(j=0;j<=n;i++){
            console.log("*",j)
        }
    }
}
