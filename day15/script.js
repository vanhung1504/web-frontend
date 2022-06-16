// const MY_OBJECT = {
//   name: "Hùng",
//   birthday: "15/04/1995",
//   gender: "Male",
//   address: {
//     home: "40B6",
//     street: "Trương Định",
//     distric: "Hoàng Mai",
//   },

//   learn: function (lang) {
//     console.log(`Learn ${lang}`);
//   },
// };

// function getValue(key) {
//   console.log(MY_OBJECT[key]);
// }

// console.log(MY_OBJECT["address"]["home"]);

// MY_OBJECT.learn("HTML");

// for (let key in MY_OBJECT) {
//   console.log(`${key}: ${MY_OBJECT[key]}`);
// }

// const GUESS_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina",
// };

// function greeting(name) {
//   if (name in GUESS_LIST) {
//     console.log(`Hi, I'm ${name}, and I'm from ${GUESS_LIST[name]}.`);
//   } else {
//     console.log(`Hi! I'm a guess.`);
//   }
// }

// greeting("Karla");

// const FAMILY = {
//   Susan: 32,
//   Fred: 34,
//   Hung: 27,
// };

// function afterNYears(family, years) {
//   let FAMILY_NEW = {};
//   for (let member in family) {
//     FAMILY_NEW[member] = family[member] + years;
//   }
//   return FAMILY_NEW;
// }

// console.log(afterNYears(FAMILY, 5));

// const SCORES = {
//   A: 100,
//   B: 14,
//   C: 9,
//   D: 28,
//   E: 145,
//   F: 12,
//   G: 3,
//   H: 10,
//   I: 200,
//   J: 100,
//   K: 114,
//   L: 100,
//   M: 25,
//   N: 450,
//   O: 80,
//   P: 2,
//   Q: 12,
//   R: 400,
//   S: 113,
//   T: 405,
//   U: 11,
//   V: 10,
//   W: 10,
//   X: 3,
//   Y: 210,
//   Z: 23,
// };

// function calcNameScore(name) {
//   let total = 0;
//   for (let char of name) {
//     if (char in SCORES) {
//       total += SCORES[char];
//     }
//   }

//   let message;
//   if (total <= 60) {
//     message = "NOT TO GOOD";
//   } else if (total <= 300) {
//     message = "PRETTY GOOD";
//   } else if (total <= 600) {
//     message = "VERY GOOD";
//   } else {
//     message = "THE BEST";
//   }
//   console.log(`Tên '${name}' có điểm là ${total} => ${message}`);
// }

// calcNameScore("HUNG");

// let counter = {
//   value: 0,

//   up() {
//     this.value += 1;
//     return this;
//   },

//   down() {
//     this.value -= 1;
//     return this;
//   },

//   get() {
//     return this.value;
//   },
// };
// console.log(counter.down().up().up().get());

let dog = {
  name: "Cau Vang",
  age: 2000,
  bread: "Shiba Inu",
  gender: "Male",
  color: "Yellow",
  legs: 4,
  "favorite food": "Mr. Giao",
  eat() {
    console.log(`${this.name} is eating ${this["favorite food"]}, yum yum...`);
    return this;
  },
  run() {
    console.log(`${this.name} is running on ${this.legs} legs...`);
    return this;
  },
  bark() {
    console.log(`Woof woof woof ...`);
    return this;
  },
};

console.log(`1. In dog ra console`);
console.log(dog);
console.log("\n");

console.log(`2. Viết câu lệnh để in name ra console`);
console.log(dog.name);
console.log("\n");

console.log(`3. Viết câu lệnh để in favorite food ra console`);
console.log(dog["favorite food"]);
console.log("\n");

console.log(
  `5. Viết câu lệnh để thay đổi color thành Brown. In kết quả ra console`
);
dog.color = "Brown";
console.log(dog);
console.log("\n");

console.log(`6. Viết câu lệnh để tăng age thêm 2 tuổi. In kết quả ra console`);
dog.age += 2;
console.log(dog);
console.log("\n");

console.log(`7. Viết câu lệnh gọi phương thức eat()`);
dog.eat();
console.log("\n");

console.log(`8. Viết câu lệnh gọi phương thức run()`);
dog.run();
console.log("\n");

console.log(
  `9. Sử dụng vòng lặp để in ra tất cả tên thuộc tính (key) ra console`
);
for (key in dog) {
  console.log(key);
}
console.log("\n");

console.log(`10. Sử dụng vòng lặp để in ra tất cả giá trị (value) ra console`);
for (key in dog) {
  console.log(`${dog[key]}`);
}
console.log("\n");

console.log(
  `11. Viết câu lệnh để thêm một thuộc tính isCrazy vào dog với giá trị boolean tùy ý`
);
dog.isCrazy = false;
console.log(dog);
console.log("\n");

console.log(
  `12. Viết câu lệnh để thêm một phương thức crazy() vào dog, kiểm tra nếu isCrazy là false thì in ra theo mẫu {name} is not crazy, nếu isCrazy là true thì sử dụng vòng lặp để gọi 2 phương thức run() và bark() 5 lần (con chó bị điên), kết quả sẽ in ra console dạng {name} is running on {legs} legs ... Woof woof woof ... {name} is running ... Woof woof woof`
);
dog.crazy = function () {
  if (!this.isCrazy) {
    console.log(`${this.name} is not crazy`);
  } else {
    for (let i = 1; i <= 5; ++i) {
      console.log(`${this.run().bark()}`);
    }
  }
};
console.log(dog);
console.log("\n");

console.log(`13. Viết câu lệnh đảo ngược giá trị của isCrazy`);
dog.isCrazy = !dog.isCrazy;
console.log(dog);
console.log("\n");

console.log(`14. Viết câu lệnh gọi phương thức crazy()`);
dog.crazy();
console.log("\n");

console.log(`15. Viết câu lệnh xóa isCrazy khỏi dog`);
delete dog.isCrazy;
console.log(dog);
console.log("\n");

console.log(
  `16. Viết câu lệnh gọi phương thức crazy(), chú ý kết quả in ra và comment lý do vì sao lại in ra như vậy`
);
dog.crazy();
console.log(
  `Lý do sau khi gọi phương thức crazy() trả về kết quả như trên là do khi xóa key isCrazy thì isCrazy => undefined => chuyển sang boolean là false => Gọi crazy() sẽ rơi vào trường hợp isCrazy = false`
);
console.log("\n");

console.log(
  `17. Sử dụng vòng lặp để in ra tất cả thuộc tính và giá trị tương ứng (không phải phương thức) trong dog ra console (sử dụng typeof để kiểm tra kiểu) theo mẫu {key} có giá trị là {value}`
);
for (key in dog) {
  if (typeof dog[key] != "function") {
    console.log(`${key} có giá trị là ${dog[key]}`);
  }
}
console.log("\n");

console.log(
  `18. Viết câu lệnh khai báo một biến mới clone và gán giá trị của dog cho clone`
);
let clone = dog;
console.log(`Ok, đã gán đối tượng dog cho clone`);
console.log(clone);
console.log("\n");

console.log(`19. Viết câu lệnh in clone và dog ra console, chú ý kết quả`);
console.log(clone);
console.log(dog);
console.log("\n");

console.log(
  `20. Viết câu lệnh chỉnh sửa name trong clone thành một tên khác bất kỳ`
);
clone.name = "Cau Bac";
console.log(clone);
console.log("\n");

console.log(`21. Viết câu lệnh in clone và dog ra console, chú ý kết quả`);
console.log(clone);
console.log(dog);
console.log("\n");

console.log(`22. Viết câu lệnh khai báo một object mới copy rỗng {}`);
let copy = {};
for (key in dog) {
  copy[key] = dog[key];
}
console.log(`Ok, đã copy key và value đối tượng dog sang copy`);
console.log(copy);
console.log("\n");

console.log(`23. Viết câu lệnh in copy và dog ra console, chú ý kết quả`);
console.log(copy);
console.log(dog);
console.log("\n");

console.log(
  `24. Viết câu lệnh chỉnh sửa name trong copy thành tên khác bất kỳ`
);
copy.name = "Cau Kim Cuong";
console.log(copy);
console.log("\n");

console.log(`25. Viết câu lệnh in copy và dog ra console, chú ý kết quả`);
console.log(copy);
console.log(dog);
console.log("\n");
