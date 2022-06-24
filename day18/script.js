console.log("Bài tập 1: capitalize(str)", "\n");
// Viết hàm capitalize(str) nhận vào một chuỗi, trả về chuỗi chỉ viết hoa ký tự đầu tiên, tất cả
// ký tự khác viết thường, loại bỏ khoảng trắng ở 2 đầu nếu có
// capitalize("hello world"); // Hello World
// capitalize("javascript is fun"); // Javascript is fun
function capitalize(str) {
  str = str.trim();
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("javascript is fun"));

console.log("\n");
console.log("Bài tập 2: title(str)", "\n");
// Viết hàm title(str) nhận vào một chuỗi, trả về chuỗi dạng viết hoa chữ cái đầu tiên của từng
// từ, những chữ cái khác phía sau viết thường, lưu ý loại bỏ phần khoảng trắng ở 2 đầu nếu có.
// title("hello world"); // Hello World
// title(" ba nGuyỄn "); // Ba Nguyễn
function title(str) {
  str = str.trim().toLowerCase();
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    if (i === 0 || (i > 0 && str[i] !== " " && str[i - 1] === " ")) {
      str =
        str.substr(0, i) + str.substr(i, 1).toUpperCase() + str.slice(i + 1);
    }
  }
  return str;
}

console.log(title(" bb  baB bGuyỄn "));

console.log("\n");
console.log("Bài tập 3: protectEmail(email)", "\n");
// Viết hàm protectEmail(email) nhận vào một chuỗi là địa chỉ email, trả về chuỗi email dạng
// rút gọn, chỉ hiển thị 2 ký tự đầu và thay thế các ký tự khác trước @ dấu ...
// protectEmail("banx9x@gmail.com"); // ba...@gmail.com
// protectEmail("phoebedo@gmail.com"); // ph...@gmail.com
function protectEmail(email) {
  email = email.trim();
  let index = email.indexOf("@");
  if (index === -1) {
    return `Email "${email}" không hợp lệ!`;
  } else if (index >= 3) {
    return email.substring(0, 2) + "..." + email.substring(index);
  } else {
    return email;
  }
}

console.log(protectEmail("abcd1234"));
console.log(protectEmail("phoebedo@gmail.com"));

console.log("\n");
console.log("Bài tập 4: reverse(str)", "\n");
// Viết hàm reverse(str) nhận vào một chuỗi, trả về chuỗi đảo ngược tất cả ký tự
// reverse("hello"); // olleh
// reverse("béo ú"); // ú oéb
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));

console.log("\n");
console.log("Bài tập 5: countVowel(str)", "\n");
// Viết hàm countVowel(str) nhận vào một chuỗi, trả về số ký tự nguyên âm có trong chuỗi, các
// ký tự nguyên âm là aeiou
// countVowel('hello'); // 3
function countVowel(str) {
  let count = 0;
  let vowel = "aeiou";
  for (char of str) {
    if (vowel.indexOf(char) !== -1) count++;
  }
  return count;
}

console.log(countVowel("hello"));

console.log("\n");
console.log("Bài tập 6: reverseWords(str)", "\n");
// Viết hàm reverseWords(str) nhận vào một chuỗi, trả về chuỗi đảo ngược thứ tự các từ
// (không phải toàn bộ ký tự)
// reverseWords('The fox is comming for the chicken'); // chicken the
// comming is fox The
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("The fox is comming for the chicken"));

console.log("\n");
console.log("Bài tập 7: randomHex()", "\n");
// Viết hàm randomHex() trả về một giá trị màu HEX ngẫu nhiên, mã màu HEX là hệ cơ số 16 (0-
// 9a-f) và có dạng #00ffaa
// randomHex(); // #0abd4f => kết quả có thể khác nhau
function randomHex() {
  let strRandom = "0123456789abcdef";
  return (
    "#" +
    strRandom[Math.floor(Math.random() * 16)] +
    strRandom[Math.floor(Math.random() * 16)] +
    strRandom[Math.floor(Math.random() * 16)] +
    strRandom[Math.floor(Math.random() * 16)] +
    strRandom[Math.floor(Math.random() * 16)] +
    strRandom[Math.floor(Math.random() * 16)]
  );
}

console.log(randomHex());

console.log("\n");
console.log("Bài tập 8: parameterize(str)", "\n");
// Viết hàm parameterize(str) nhận vào một chuỗi bất kỳ (chỉ chứa các từ không dấu), trả về
// chuỗi dạng url dạng viết thường và các từ được nối bằng các dấu -
// parameterize("Hello World"); // hello-world
// parameterize(" javascript is very funny "); // javascript-is-very-funny
function parameterize(str) {
  str = str.trim();
  return str.toLowerCase().replace(/ /g, "-");
}

console.log(parameterize(" javascript is very funny "));

console.log("\n");
console.log("Bài tập 9: isPalindrome(str)", "\n");
// Viết hàm isPalindrome(str) nhận vào một chuỗi bất kỳ, kiểm tra và trả về kết quả chuỗi gốc
// và chuỗi đảo ngược có giống nhau hay không, không phân biệt hoa thường và không tính dấu
// khoảng trắng
// isPalindrome("Race car"); // racecar == racecar => true
// isPalindrome("Ba"); // ba != ab => false
function isPalindrome(str) {
  str = str.toLowerCase().replace(/ /g, "");
  let strReverse = str.split("").reverse().join("");
  return str === strReverse;
}

console.log(isPalindrome("   Race    car"));

console.log("\n");
console.log("Bài tập 10: mostCommonCharacter(str)", "\n");
// Viết hàm mostCommonCharacter(str) tìm và trả về ký tự xuất hiện nhiều lần nhất trong
// chuỗi, nếu có nhiều ký tự có số lần xuất hiện giống nhau thì trả về ký tự đứng trước theo bảng
// alphabe
// mostCommonCharacter("Ba Nguyen"); // { n: 2 }
// mostCommonCharacter("Hello Worldo"); // { l: 3, o: 3 }
function mostCommonCharacter(str) {
  // Tinh so lan xuat hien cua cac ky tu
  let charWithCount = {};
  for (let char of str) {
    if (charWithCount[char] === undefined) {
      charWithCount[char] = 1;
    } else {
      charWithCount[char] = charWithCount[char] + 1;
    }
  }

  let max = 1;
  let result = {};
  for (let key in charWithCount) {
    if (charWithCount[key] > max) {
      max = charWithCount[key];
      for (let key in result) {
        delete result[key];
      }
      result[key] = charWithCount[key];
    } else if (charWithCount[key] == max) {
      result[key] = charWithCount[key];
    }
  }
  return result;
}

console.log(mostCommonCharacter("Hello Worldo"));

console.log("\n");
console.log("Bài tập 11: sortByName(arr)", "\n");
// Viết hàm sortByName(arr) nhận vào một mảng các objects có tên học viên, trả về một mảng
// mới được sắp xếp theo tên (từ cuối cùng trong tên) theo thứ tự alphabe
// const students = [
// { name: "Hoàng Thị Ngọc Linh", point: 0 },
// { name: "Bùi Lan Nhi", point: 0 },
// { name: "Nguyễn Ba", point: 10 }
// ];
// sortByName(students);
// kết quả
// [
// { name: "Nguyễn Ba", point: 10 },
// { name: "Hoàng Thị Ngọc Linh", point: 0},
// { name: "Bùi Lan Nhi", point: 0}
// ]
function sortByName(arr) {
  return arr.sort(function (user1, user2) {
    let name1 = user1.name.split(" ")[user1.name.split(" ").length - 1];
    let name2 = user2.name.split(" ")[user2.name.split(" ").length - 1];
    return name1.localeCompare(name2);
  });
}

console.log(
  sortByName([
    { name: "Hoàng Thị Ngọc Linh", point: 0 },
    { name: "Bùi Lan Nhi", point: 0 },
    { name: "Nguyễn Ba", point: 10 },
  ])
);
