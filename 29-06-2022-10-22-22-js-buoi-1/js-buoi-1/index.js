// console.log("Hello world 2!!");

// // variable : biến

// var name = "Oliver Đặng";
// var age = 27;

// // camel case
// var phoneNumber = "0334643124";
// var dateOfBirth = "9/6/1995";

// // snake case
// // var phone_number;
// // var date_of_birth

// /**
//  *
//  * asdas
//  * asd
//  * asd
//  * asd
//  * asdjkasd
//  */

// age = 28;

// console.log(age);
// console.log(name);
// console.log(name);
// console.log(dateOfBirth);

// // Data Type

// var number = 1;
// var email = "hieu@gmail.com";
// var isLogin = false;
// var weight; //undefined
// var height = null;

// // Operators

// var res1 = 5 + 6;
// var res2 = 5 - 6; // -1
// var res3 = 5 * 6; // 30
// var res4 = 5 / 6; // 0.83333333333333333

// var res6 = "trung" + "hieu";

// var res7 = 5 + "7"; // => "57"
// var res8 = 5 - "7"; // => -2

// res1 = res1 + 6;
// // res1 = 17

// res2++;
// // res2 = res2 + 1
// res2--;

// res3 += 5; // res3 = res3 + 5 = 35
// res3 -= 2; // res3 = res3 - 2 = 33;
// res3 /= 3; // res3 = res3 / 3 = 11
// res3 *= 2; // res3 = res3 * 2 = 22;
// res3 %= 3; // res3 = res3 % 3 = 1

// // var res10 = res5++ + 2; // 7
// // res10 = 7

// var res11 = ++res5 + 2; // res11 = 8

// var res12 = res11++; // res12 = 8

// res12 = res12++ + 3; // 11

// console.log(res11, res12);

/**
 * a =5, b =6
 * a =9 , b = 7
 * a = 10 , b = 16
 * a= 10, b = 17 c = 37
 * c= 38, b=66, a = 11
 *
 */

/**
 * a =3 , b = 5, c = 14.1,
 * c = 4.7
 * b = 6.7
 * a = 40.2
 * sum = 22.1
 *
 *
 *
 */

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

console.log("Tổng lương trong tháng là:", totalSalary);

var n = 83;

var num1 = n % 10; // 3
var num2 = Math.floor(n / 10); // 8.3
// var num2 = Math.ceil(n / 10); // 8.3
// var num2 = Math.round(n / 10); // 8.3
