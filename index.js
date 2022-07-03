/**
 * Sơ đồ 3 khối
 *
 * INPUT: lương 1 ngày, số ngày làm
 *
 * PROCESS: (pseudo code)
 *      1. lấy được input (hardcode)
 *      2. tính lương = lương 1 ngày * số ngày làm
 *      3. log lương ra màn hình
 *
 * OUTPUT: lương
 *
 */
var salaryPerDay = 100000;
var workingDays = 20;

var totalSalary = salaryPerDay * workingDays;
console.log("Bài 1");

console.log("Tổng lương trong tháng là:", totalSalary);

var n = 83;

// Bài 2
/**
 * INPUT: Cho 5 số thực nhập và từ bàn phím
 * 
 * PROCESS:
 * 1. Lấy được giá trị input 
 * 2. Giá trị trung bình = (tổng của 5 số thực từ input)/5
 * 3. In giá trị trung bình ra màn hình.
 * 
 * OUTPUT: Giá trị trung bình của 5 số thực
 * 
 */
var a = 5;
var b = 4;
var c = 6;
var d = -5;
var e = 10;
console.log("Bài 2");
console.log("input:", a, b, c, d, e)
console.log("Giá trị trung bình là: ", (a + b + c + d + e) / 5);

// Bài 3
/**
 * INPUT:1.Cho giá trị 1 USD = 23 500 VNĐ
 *       2.Người dùng nhập vào số USD cần đổi sang tiền việt.
 * 
 * PROCESS:1. Nhận ra giá input
 *         2. Số tiền sau khi quy đổi = Số tiền cần quy đổi * giá trị 1 USD
 *         3. In số tiền sau quy đổi ra màn hình.
 * 
 * OUTPUT: Số tiền có được sau khi quy đổi 
 */

var oneUSD = 23500;
var NumberOfUSD;
NumberOfUSD = prompt("Vui lòng nhập số tiền muốn đổi:", "");
console.log("Bài 3 : Quy đổi USD qua VNĐ");
console.log("Số tiền cần đổi là:", NumberOfUSD + "USD");
console.log("Số tiền nhận được sau quy đổi là:", NumberOfUSD * oneUSD + "VNĐ");

// Bài 4
/**
 * INPUT: cho chiều dài, chiều rộng hình chữ nhật nhập từ bàn phím
 * 
 * PROCESS:1.Nhận 2 giá trị a, b là chiều dài, chiều rộng hình chữ nhật.
 *         2. Diện tích HCN: dài * rộng
 *            Chu vi HCN = (dài + rộng) * 2
 *         3. In kết quả ra màn hình
 * 
 * 
 * OUPUT: DIện tích, chu vi hình chữ nhật
 */

console.log("Bài 4: Tính chu vi, diện tích HCN");
var a;
var b;
a = prompt("Chiều dài HCN là:", "");
b = prompt("Chiều rộng HCN là:", "");
console.log("Chiều dài là:", a);
console.log("Chiều rộng là:", b);
console.log("Diện tích HCN là:", a * b);
console.log("Chu vi HCN là: ", ((a + b) * 2));


// Bài 5
/**
 * INPUT: Cho số tự nhiên nhập từ bàn phím
 * 
 * PROCESS:
 *  1. Nhận giá trị từ input
 *  2. Lấy chữ số hàng đơn vị : số đó % 10.
 *     lấy chữ số hàng chục : (Số đó % 100)/10.
 *     Sau đó tính tổng 2 số
 *  3. In tổng ra màn hình
 * 
 * 
 * OUTPUT: Tổng 2 ký số của input
 *  */

console.log("BÀi 5");
var number;
number = prompt("Vui lòng nhập số cần tính: ", "");
ten = Math.floor((number % 100) / 10);
unit = number % 10;
sum = ten + unit;
console.log("Tổng cần tính là:", sum);