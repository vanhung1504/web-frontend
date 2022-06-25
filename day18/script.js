console.log("Bài tập 1: capitalize(str)", "\n");
// Viết hàm capitalize(str) nhận vào một chuỗi, trả về chuỗi chỉ viết hoa ký tự đầu tiên, tất cả
// ký tự khác viết thường, loại bỏ khoảng trắng ở 2 đầu nếu có
// capitalize("hello world"); // Hello World
// capitalize("javascript is fun"); // Javascript is fun
function capitalize(str) {
  str = str.trim();
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
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

// Viết hàm curDate() in ra ngày hiện tại theo định dạng ngày:tháng:năm, ví dụ 10/01/2020
// (lưu ý ngày tháng in ra đủ 2 chữ số)
function curDate() {
  let d = new Date();
  let currDate = (d.getDate() < 10 ? "0" : "") + d.getDate();
  let currMonth = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
  let currYear = d.getFullYear();
  return currDate + ":" + currMonth + ":" + currYear;
}

console.log(curDate());

// Viết hàm curTime() in ra thời gian hiện tại theo định dạng giờ:phút:giây, ví dụ 10:05:31 (lưu
// ý in ra đủ 2 chữ số)
function curTime() {
  let d = new Date();
  let h = (d.getHours() < 10 ? "0" : "") + d.getHours();
  let m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  let s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
  return h + ":" + m + ":" + s;
}

console.log(curTime());

// Viết hàm weekday() trả về thứ trong tuần tương ứng với ngày hiện tại, thứ dạng viết tắt tương
// ứng T2, T3, T4, ...
function weekday() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "CN";
      break;
    case 1:
      day = "T2";
      break;
    case 2:
      day = "T3";
      break;
    case 3:
      day = "T4";
      break;
    case 4:
      day = "T5";
      break;
    case 5:
      day = "T6";
      break;
    case 6:
      day = "T7";
  }
  return day;
}

console.log(weekday());

// Viết hàm getDateAgo(days) nhận vào 1 giá trị days là một số nguyên dương, trả về ngày cụ
// thể trước ngày hiện tại days ngày
function getDateAgo(days) {
  let d = new Date();
  d = new Date(d.setTime(d.getTime() - days * 24 * 60 * 60 * 1000));
  let currDate = (d.getDate() < 10 ? "0" : "") + d.getDate();
  let currMonth = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
  let currYear = d.getFullYear();
  return currDate + "/" + currMonth + "/" + currYear;
}
console.log(getDateAgo(1));

// Viết hàm getLastDayOfMonth(year, month) nhận 2 giá trị year là một năm và month là một
// tháng bất kỳ, trả về số ngày của tháng đó
function getLastDayOfMonth(year, month) {
  let d = new Date(year, month, 0);
  return d.getDate();
}
console.log(getLastDayOfMonth(2000, 2));

// Viết hàm getDaysToNextBirthday(year, month, date) nhận vào 3 giá trị year, month,
// date tương ứng là ngày sinh của một người, trả về số ngày còn lại cho đến sinh nhật tiếp theo
function getDaysToNextBirthday(year, month, date) {
  let currDate = new Date();
  let inputDate = new Date(currDate.getFullYear(), month - 1, date + 1);
  let nextBirthday;
  if (inputDate - currDate > 0) {
    nextBirthday = new Date(currDate.getFullYear(), month - 1, date + 1);
  } else {
    nextBirthday = new Date(currDate.getFullYear() + 1, month - 1, date + 1);
  }
  return Math.floor((nextBirthday - currDate) / (1000 * 3600 * 24));
}
console.log(getDaysToNextBirthday(1995, 04, 15));

// Viết hàm humanize(date) nhận vào 1 object date, so sánh với thời gian hiện tại trả về một
// chuỗi biểu thị thời gian đã trôi qua theo quy tắc sau:
// Nếu thời gian đã trôi qua ít hơn 5 giây thì trả về Vừa xong
// Nếu thời gian đã trôi qua ít hơn 1 phút thì trả về X giây trước
// Nếu thời gian đã trôi qua ít hơn 1 giờ thì trả về X phút trước
// Nếu thời gian đã trôi qua ít hơn 1 ngày thì trả về X giờ trước
// Nếu thời gian đã trôi qua ít hơn 1 tháng thì trả về X ngày trước (chú ý so sánh xem có cùng
// tháng hay không)
// Nếu thời gian đã trôi qua ít hơn 1 năm thì trả về X tháng trước
// Nếu thời gian đã trôi qua nhiều hơn 1 năm thì trả về Ngày xửa ngày xưa, ...
function humanize(date) {
  let passedTime = (Date.now() - date.getTime()) / 1000;

  if (passedTime < 5) {
    return "Vừa xong";
  } else if (passedTime < 60) {
    return `${Math.round(passedTime)} giây trước`;
  } else if (passedTime < 3600) {
    return `${Math.round(passedTime / 60)} phút trước`;
  } else if (passedTime < 86400) {
    return `${Math.round(passedTime / 60 / 60)} giờ trước`;
  } else if (passedTime < 2592000) {
    return `${Math.round(passedTime / 60 / 60 / 24)} ngày trước`;
  } else if (passedTime < 31536000) {
    return `${Math.round(passedTime / 60 / 60 / 24 / 30)} tháng trước`;
  } else {
    return `Ngày xửa ngày xưa ...`;
  }
}
let date = new Date(2021, 11, 10, 19, 52, 00);
console.log(humanize(date));

