// Viết hàm max(arr) nhận vào một mảng các số, tìm và trả về số lớn nhất
// max([1, 5, 3, 4, 2]); // 5
function max(arr) {
  let maxItem = arr[0];
  for (let value of arr) {
    if (value > maxItem) maxItem = value;
  }
  return maxItem;
}

console.log(max([1, 5, 3, 4, 2]));

// Viết hàm minMax(arr) nhận vào một mảng các số, tìm ra số nhỏ nhất và lớn nhất trong mảng,
// sau đó trả về kết quả là một mảng mới chứa 2 giá trị [min, max]
// minMax([1, 5, 3, 4, 2]); // [1, 5]
function minMax(arr) {
  let minItem = arr[0];
  let maxItem = arr[0];
  for (let value of arr) {
    if (value > maxItem) {
      maxItem = value;
    }

    if (value < minItem) {
      minItem = value;
    }
  }
  return [minItem, maxItem];
}

console.log(minMax([1, 5, 3, 4, 2]));

// Viết hàm avg(arr) nhận vào một mảng các số, tính trung bình cộng các số và trả về kết quả
// avg([1, 5, 3, 4, 2]); // 3
function avg(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum / arr.length;
}

console.log(avg([1, 5, 3, 4, 2]));

// Viết hàm swap(arr, x, y) nhận vào một mảng các số và 2 số x, y tương ứng với 2 chỉ mục
// trong mảng, đổi chỗ vị trí 2 phần tử tương ứng, trả về kết quả là mảng arr đã thay đổi, lưu ý
// mảng arr phải thay đổi sau khi gọi hàm swap()
// const arr = [1, 5, 3, 4, 2];
// swap(arr, 0, 2); // [3, 5, 1, 4, 2]
// console.log(arr); // [3, 5, 1, 4, 2]
function swap(arr, x, y) {
  let tempItem = arr[x];
  arr[x] = arr[y];
  arr[y] = tempItem;
  return arr;
}

console.log(swap([1, 5, 3, 4, 2], 0, 2));

// Viết hàm secondLargest(arr) nhận vào một mảng arr, tìm và trả về kết quả là số lớn thứ 2
// trong mảng, lưu ý mảng có thể chứa nhiều số trùng nhau
// secondLargest([1, 5, 5, 3, 4, 2]); // 4
function secondLargest(arr) {
  let first = arr[0];
  let second = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest([5, 5, 3, 4, 2]));

// Viết hàm mix(arr1, arr2) nhận vào 2 mảng bất kỳ, thực hiện trộn (kết hợp) 2 mảng vào nhau
// và trả về kết quả là một mảng mới chứa các phần tử đã trộn
// mix([1, 2, 3], [4, 5, 6]); // [1, 4, 2, 5, 3, 6]
function mix(arr1, arr2) {
  let result = [];
  result = arr1.concat(arr2);
  return result;
}

console.log(mix([1, 2, 3], [4, 5, 6]));

// Viết hàm shuffle(arr) nhận vào một mảng chứa các giá trị bất kỳ, thực hiện xáo trộn ngẫu
// nhiên vị trí các phần tử trong mảng và trả về kết quả là mảng đã xáo trộn, lưu ý mảng arr phải
// thay đổi sau khi gọi hàm
// const arr = [10, 12, 15];
// shuffle(arr); // [12, 15, 10] => kết quả có thể khác nhau
// console.log(arr); // [12, 15, 10]
function shuffle(arr) {
  // copy mảng
  let currLength = arr.length;
  let arrCopy = [];
  for (let i = 0; i < currLength; i++) {
    arrCopy[i] = arr[i];
  }

  while (!(currLength < 1)) {
    arr[currLength - 1] = arrCopy.splice(
      Math.floor(Math.random() * currLength),
      1
    );
    currLength--;
  }

  return arr;
}

const myArr = [12, 15, 10, 32, 78, 62, 58, 72, 83, 95];
console.log(`Mảng ban đầu là: ${myArr}`);
shuffle(myArr);
console.log(`Mảng lúc sau là: ${myArr}`);

// Viết hàm intersection(arr1, arr2) nhận vào 2 mảng bất kỳ, trả về kết quả là một mảng
// mới chứa toàn bộ phần tử xuất hiện trong cả 2 mảng đó
// intersection([1, 2, 3], [3, 4, 5]); // [3]
function intersection(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let arrMin = [];
  let arrMax = [];
  if (arr1Length <= arr2Length) {
    arrMin = arr1;
    arrMax = arr2;
  } else {
    arrMin = arr2;
    arrMax = arr1;
  }

  let result = [];

  for (let value of arrMin) {
    if (arrMax.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(intersection([1, 4, 5, 3], [3, 4, 5, 6, 8]));

// Viết hàm difference(arr1, arr2) nhận vào 2 mảng bất kỳ, trả về kết quả là một mảng mới
// chứa toàn bộ phần tử chỉ xuất hiện ở 1 trong 2 mảng
// difference([1, 2, 3], [2, 3, 4]); // [1, 4]
function difference(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let arrMin = [];
  let arrMax = [];
  if (arr1Length <= arr2Length) {
    arrMin = arr1;
    arrMax = arr2;
  } else {
    arrMin = arr2;
    arrMax = arr1;
  }

  let result = [];

  for (let value of arrMin) {
    if (!arrMax.includes(value)) {
      result.push(value);
    }
  }

  for (let value of arrMax) {
    if (!arrMin.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(difference([1, 2, 3], [2, 3, 4]));

// Viết hàm removeDuplicate(arr) nhận vào 1 mảng bất kỳ, trả về kết quả là một mảng mới
// chứa các giá trị duy nhất (unique - không chứa các giá trị trung lặp) của mảng
// removeDuplicate([1, 2, 5, 2, 3, 1, 3]); // [1, 2, 5, 3]
function removeDuplicate(arr) {
  let currLength = arr.length;
  let item;
  let result = [];
  while (currLength > 0) {
    item = arr.shift();
    if (!result.includes(item)) {
      result.push(item);
    }
    currLength--;
  }
  return result;
}

console.log(removeDuplicate([1, 2, 5, 2, 3, 1, 3, 4, 3, 4]));

// Viết hàm filterRange(arr, a, b) nhận vào một mảng số, trả về kết quả là một mảng mới
// chỉ chứa các số lớn hơn hoặc bằng a và nhỏ hơn hoặc bằng b (a nhỏ hơn b), gợi ý sử dụng
// phương thức filter()
// const arr = [5, 3, 8, 1];
// filterRange(arr, 1, 4); // [5, 3]
function filterRange(arr, a, b) {
  return arr.filter((currentValue) => {
    return a <= currentValue && currentValue <= b;
  });
}

console.log(filterRange([5, 3, 8, 1], 1, 4));

// Viết hàm getNames(users) nhận vào một mảng các object, mỗi object có thông tin tên và tuổi,
// trả về một mảng mới chỉ chứa tên, gợi ý sử dụng phương thức map()
// const users = [
// { name: "John", age: 25 },
// { name: "Pete", age: 30 },
// { name: "Mary", age: 28 }
// ];
// getNames(users); // [ "John", "Pete", "Mary" ]
function getNames(users) {
  return users.map((object) => {
    return object.name;
  });
}

console.log(
  getNames([
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
  ])
);

// Viết hàm mapFullname(users) nhận vào một mảng các object, mỗi object có thông tin tên, tên
// đệm và id , trả về một mảng mới chứa các object tương tự, thay thế tên và tên đệm thành tên
// đầy đủ (tên + tên đệm), gợi ý sử dụng phương thức map()
// const users = [
// { name: "John", surname: "Smith", id: 1 },
// { name: "Pete", surname: "Hunt", id: 2 },
// { name: "Mary", surname: "Key", id: 3 }
// ];
// mapFullname(users);
// kết quả
// [
// { fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },
// { fullName: "Mary Key", id: 3 }
// ]
function mapFullname(users) {
  return users.map((object) => {
    return {
      fullName: `${object.name} ${object.surname}`,
      id: object.id,
    };
  });
}

console.log(
  mapFullname([
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 },
  ])
);

// Viết hàm greaterThan(users, age) nhận vào một mảng các object, mỗi object có thông tin
// tên và tuổi, và age là một số nguyên dương bất kỳ, trả về một mảng mới chỉ chứa các object có
// tuổi lớn hơn hoặc bằng age, gợi ý sử dụng phương thức filter()
// const users = [
//   { name: "John", age: 25 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 28 },
// ];
// greaterThan(users, 29);
// kết quả
// [
// { name: "Pete", age: 30 },
// ]
function greaterThan(users, age) {
  return users.filter((object) => {
    return object.age >= age;
  });
}

console.log(
  greaterThan(
    [
      { name: "John", age: 25 },
      { name: "Pete", age: 30 },
      { name: "Mary", age: 28 },
    ],
    29
  )
);

// Viết hàm avgAge(users) nhận vào một mảng các object, mỗi object có thông tin tên và tuổi,
// tính tuổi trung bình và trả về kết quả, gợi ý sử dụng phương thức reduce()
// const users = [
//   { name: "John", age: 25 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 29 },
// ];
// avgAge(users); // (25 + 30 + 29) / 3 = 28
function avgAge(users) {
  return (
    users.reduce((total, object) => {
      return (total += object.age);
    }, 0) / users.length
  );
}

console.log(
  avgAge([
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
  ])
);

// Viết hàm sortUsersByAge(users) nhận vào một mảng các object, mỗi object có thông tin tên
// và tuổi, sắp xếp users theo độ tuổi giảm dần và trả về kết quả, lưu ý mảng users phải thay đổi
// sau khi gọi hàm, gợi ý sử dụng phương thức sort()
// const users = [
//   { name: "John", age: 25 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 28 },
// ];
// sortUsersByAge(users);
// kết quả
// [
// { name: "Pete", age: 30 },
// { name: "Mary", age: 28 },
// { name: "John", age: 25 }
// ]
function sortUsersByAge(users) {
  return users.sort((user1, user2) => {
    return user2.age - user1.age;
  });
}

console.log(
  sortUsersByAge([
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
  ])
);
