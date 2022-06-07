// let hello = function () {
//   let yourName = prompt("Tên của bạn là gì?");
//   console.log(`Chào bạn ${yourName}, rất vui được làm quen!`);
// };
// hello();

// // Hàm tính tổng
// let sum = function (a, b) {
//   console.log(`Tổng của ${a} và ${b} là ${a + b}`);
// };
// let a = 4;
// let b = 5;
// // let a = Number(prompt("Mời bạn nhập số thứ nhất:"));
// // let b = Number(prompt("Mời bạn nhập số thứ hai:"));
// sum(a, b);

// // Hàm tính độ C ra độ F
// let fromCtoF = function (temp) {
//   console.log(`${temp} độ C = ${temp * 1.8 + 32} độ F`);
// };
// fromCtoF(37);

// let findArea = function (a, b) {
//   console.log(`Diện tích hình chữ nhật kích thước ${a}x${b} là: ${a * b}`);
// };
// findArea(4, 5);

console.log("BÀI TẬP 1:");

// Ham quy doi USD sang VND
let USD2VND = function (usd) {
  console.log(`Quy đổi: $${usd} = ${usd * 23500} VNĐ`);
};
USD2VND(1);
USD2VND(5);
USD2VND(10);

console.log("\n");
console.log("BÀI TẬP 2:");

// Ham tinh lai suat kep
let compoundInterest = function (P, r, n, t) {
  console.log(
    `Với số tiền gốc ban đầu là ${P} VNĐ, lãi suất ngân hàng ${
      r * 100
    }% một năm, ghép lãi ${n} lần/năm thì tổng số tiền bạn nhận được sau ${t} năm gửi ngân hàng là: ${
      P * (1 + r / n) ** (n * t)
    } VNĐ`
  );
};
compoundInterest(2000000000, 0.09, 12, 3);
compoundInterest(100000000, 0.065, 1, 1);
compoundInterest(50000000, 0.05, 2, 2);
