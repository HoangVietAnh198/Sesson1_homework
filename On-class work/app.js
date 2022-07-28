//1. Trường hợp đặt tên biến thì sẽ thông báo SyntaxError
// - bắt đầu bằng chữ số.
// - có chứa kí tự đặc biệt ngoại trừ dấu "$" và "_".
// - tên giống với các từ khóa của javascript.
// Ex:
//     let 10 = "mười";
//     let -một = "âm một";
//     let var = "abc";
//2. trong javascript để kiểm tra dữ liệu ta cần nhìn vào biến
//3. Trong JavaScript có tất cả 7 kiểu dữ liệu chính: string, number, boolean, null, object, undefined, array.
// Ex:
// let name = "Anh";
// let mumber = "15";
// bai tap
//2.
//a
// let msg = "Rikkei is awesome";
// console.log(msg);
// //b
// let studentCount = 0;
// console.log(studentCount);
// //3.
// //a
// msg = "Coding is hard but super cool and fun";
// console.log(msg);
// //b
// studentCount = 0 + 30;
// console.log(studentCount);
// //c
// msg = msg.toUpperCase();
// console.log(msg);
//d
    // let n = prompt("hãy nhập giá trị");
    //console.log(Number(studentCount)+Number(n));
//4
    //alert("Xin chào các bạn yêu quý");
//5
    // let name = prompt("Tên bạn là gì ạ");
    // alert(`Xin chào bạn ${name} yêu quý ^_^`);
//6
// let firstname = prompt("Họ của bạn là gì ạ");
// let lastname = prompt("Tên bạn là gì ạ");
// alert(`Xin chào bạn ${firstname} ${lastname} yêu quý ^_^`);
//7
// let c = prompt("cạnh của hình vuông dài bao nhiêu cm");
// alert(`diện tích hình vuông là ${c*c}`);
//8
// let d = prompt("bán kính hình tròn bao nhiêu cm");
// alert(`diện tích hình tròn là ${3,14*d*d}`);
//9
// let e = prompt("nhập độ C");
// alert(`độ F sẽ là ${e*1.8+32}`);
//10
// alert(`The quick ___ fox jumps over the ___ dog`)
// let f = prompt("nhập từ đầu tiên");
// let g = prompt("nhập từ thứ 2");
// alert(`The quick ${f} fox jumps over the ${g} dog`)