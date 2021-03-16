/**
 * Câu điều kiện
 */
// kiểm tra n có lớn hơn 0
function checkN(n){
if(n>0){
    console.log("n lon hon 0");
}
// kiểm tra chẵn lẻ
if(n%2===0){
    console.log("n la so chan");
}
else{
    console.log("n la so le");
}
// Kiểm tra n là so dương hay số âm
if(n>0){
    console.log("là số dương");
} else if(n<0){
    console.log("là số âm");
}else{
    console.log("n = 0");
}
}
function checkSoN(a,b){
    if(a>b){
        console.log("a là số lớn",a)
    }else if(a<b){
        console.log("B là số lớn",b)
    }else{
        console.log("2 số bằng nhau")
    }
}
function diemTrungBinh(toan, ly , hoa){
    if(toan < 0||toan > 10 ||ly < 0||ly > 10 || hoa < 0||hoa > 10 ){
        console.log("Giá trị k hợp lệ")
        return;
    }
    let dtb=((toan + ly + hoa)/3);
    if(10 < dtb && dtb >= 8){
        console.log("Xếp loại giỏi");
    }else if(8 > dtb && dtb >= 6.5 ){
        console.log("Xếp loại khá");
    }else if(dtb >= 4 && dtb < 6.5){
        console.log("Xếp loại Trung bình");
    }else if(dtb > 0){
        console.log("Xếp loại Yếu");
    }
}
function checkSo4(){
    let a =2+2;
    switch(a){
        case 3:
            console.log("Small")
            break;
        case 4:
            console.log("Equal")
            break;
        case 5:
            console.log("Big")
            break;
        default:
            console.log("Default")
    }
}
function ptbhai(a,b,c){
    if( a === 0){
        console.log("Nope")
        return;
    }
    let x1,x2;
    let delta= b*b-4*a*c
    if(delta > 0){
        x1=(-b + Math.sqrt(delta)) / (2*a)
        x2=(-b - Math.sqrt(delta)) / (2*a)
        console.log("Nghiệm 1",x1)
        console.log("Nghiệm 2",x2)
        
    }else if(delta === 0){
        x1 = -b/(2*a)
        console.log("Phương trình có nghiệm kép",x1)
    }else{
        console.log("Phương trình vô nghiệm")
    }
}
// kiểm tra tam giác
function tamgiac(a,b,c){
    if(a<0||b<0||c<0){
        return "a, b, c phải là số dương";
    }
    if( a<b+c && b<a+c && c<a+b ){
        // if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
        //    console.log("đây là tam giác vuông")
        // else if(a==b && b==c)
        // console.log("đây là tam giác đều")
        // else if(a==b || a==c || b==c)
        // console.log("đây là tam giác Cân")
        // else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)    
        // console.log("đây là tam giác tù")
        // else
        // console.log("đây là tam giác nhọn")

        console.log("đây là 1 tam giác")
        let p = (a+b+c)/2
        let s = Math.sqrt((p*(p-a)*p*(p-b)*p*(p-c)));
        console.log("Diện tích là",s)
    }
    else{
        console.log("Ba canh a, b, c khong phai la ba canh cua mot tam giac")
    }
}