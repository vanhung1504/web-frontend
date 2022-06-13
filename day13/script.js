let message = "";

let findBMI = function (w, h) {
  w = Number(w);
  h = Number(h);
  let BMI = (w / (h * h)).toFixed(2);
  if (BMI > 40) {
    message = `BMI của bạn là: ${BMI} => Béo phì độ III`;
    console.log(message);
  } else if (BMI > 35) {
    message = `BMI của bạn là: ${BMI} => Béo phì độ II`;
    console.log(message);
  } else if (BMI > 30) {
    message = `BMI của bạn là: ${BMI} => Béo phì độ I`;
    console.log(message);
  } else if (BMI > 25) {
    message = `BMI của bạn là: ${BMI} => Hơi béo`;
    console.log(message);
  } else if (BMI > 18.5) {
    message = `BMI của bạn là: ${BMI} => Bình thường`;
    console.log(message);
  } else if (BMI > 17.5) {
    message = `BMI của bạn là: ${BMI} => Gầy độ I`;
    console.log(message);
  } else if (BMI > 16) {
    message = `BMI của bạn là: ${BMI} => Gầy độ II`;
    console.log(message);
  } else {
    message = `BMI của bạn là: ${BMI} => Gầy độ III`;
    console.log(message);
  }
  return message;
};

let findMaxOfThree = function (a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  let max = a;
  // if (a >= b && a >= c) {
  //   console.log(`Số lớn nhất trong 3 số ${a}, ${b}, ${c} là: ${a}`);
  // } else if (b >= a && b >= c) {
  //   console.log(`Số lớn nhất trong 3 số ${a}, ${b}, ${c} là: ${b}`);
  // } else if (c >= a && c >= b) {
  //   console.log(`Số lớn nhất trong 3 số ${a}, ${b}, ${c} là: ${c}`);
  // }
  if (max < b) max = b;
  if (max < c) max = c;
  message = `Số lớn nhất trong 3 số ${a}, ${b}, ${c} là: ${max}`;
  console.log(message);
  return message;
};

let calcWaterBill = function (v) {
  v = Number(v);
  let totalMoney = 0;
  if (0 < v && v <= 5) {
    totalMoney = 45000;
  } else if (v <= 10) {
    totalMoney = v * 9000;
  } else if (v <= 20) {
    totalMoney = 10 * 9000 + (v - 10) * 11000;
  } else if (v <= 30) {
    totalMoney = 10 * 9000 + 10 * 11000 + (v - 20) * 13000;
  } else {
    totalMoney = 10 * 9000 + 10 * 11000 + 10 * 13000 + (v - 30) * 15000;
  }
  message = `Số tiền bạn phải trả cho ${v} m3 nước là: ${totalMoney}`;
  console.log(message);
  return message;
};

let calcTaxiFee = function (s) {
  s = Number(s);
  let fee = 10000;
  if (s <= 30) {
    fee += s * 11000;
  } else {
    fee = fee + 30 * 11000 + (s - 30) * 9500;
  }
  message = `Số tiền taxi bạn phải trả cho ${s}km là ${fee}`;
  console.log(message);
  return message;
};

// let password = "15041995";
// let answer = prompt("Please enter your password!");
// while (answer != password) {
//   answer = prompt("Password is wrong. Re-enter your password!");
// }

// alert("Login successfully!");

// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let total = 0;
// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// for (let i = 1; i <= 100; ++i) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i} chia hết cho cả 3 và 5`);
//   } else if (i % 5 == 0) {
//     console.log(`${i} chia hết cho 5`);
//   } else if (i % 3 == 0) {
//     console.log(`${i} chia hết cho 3`);
//   }
// }

let checkNumberIsPrime = function (n) {
  n = Number(n);
  // Check xem co phai la so nguyen duong khong
  let isInteger = true;
  if (n <= 0) {
    isInteger = false;
  } else {
    for (let i = 0; i < n; ++i) {
      if (n - i < 1) {
        isInteger = false;
      }
    }
  }

  // Check xem co phai la so nguyen to khong
  if (isInteger) {
    let isPrime = true;

    if (n == 2 || n == 3) {
      isPrime = true;
    } else if (n <= 4) {
      isPrime = false;
    } else {
      for (let i = 2; i < n / 2; ++i) {
        if (n % i == 0) {
          isPrime = false;
        }
      }
    }

    if (isPrime) {
      message = `Số ${n} là số nguyên tố`;
      console.log(message);
    } else {
      message = `Số ${n} không phải là số nguyên tố`;
      console.log(message);
    }
  } else {
    message = `Số ${n} không hợp lệ (Bạn phải nhập số nguyên dương)!`;
    console.log(message);
  }
  return message;
};

let findFirstLastNumber = function (n) {
  // n = Number(n);
  const N_INPUT = n;
  // Dao dau n neu n la so am
  if (n < 0) {
    n *= -1;
  }

  // Check xem co phai so nguyen khong
  let isInteger = true;
  for (let i = 0; i < n; ++i) {
    if (n - i < 1) {
      isInteger = false;
    }
  }

  // Neu khong phai la so nguyen thi chuyen doi ve so nguyen bang cach nhan lien tiep voi 10
  while (isInteger == false) {
    n *= 10;
    for (let i = 0; i <= n; ++i) {
      if (n - i == 0) {
        isInteger = true;
      }
    }
  }

  // Tim so cuoi cung
  let lastDigit = n % 10;

  // Tim so dau tien
  let firstDigit;

  if (N_INPUT < 1) {
    firstDigit = 0;
  } else if (1 <= n && n <= 9) {
    // Truong hop nay la truong hop so nguyen tu 1 den 9
    firstDigit = n;
  } else {
    while (n >= 10) {
      n /= 10;
    }

    for (let i = 0; i < n; ++i) {
      if (n - i < 1) {
        firstDigit = i;
      }
    }
  }
  message = `Số ${N_INPUT} có chữ số đầu tiên là ${firstDigit} và chữ số cuối cùng là ${lastDigit}`;
  console.log(message);
  return message;
};

let isOddNumber = function (n) {
  n = Number(n);
  if (n % 2 == 0) {
    message = `Số ${n} là số chẵn.`;
  } else {
    message = `Số ${n} là số lẻ.`;
  }
  console.log(message);
  return message;
};

let divisibleByThreeAndFive = function (n) {
  n = Number(n);
  if (n % 3 == 0 && n % 5 == 0) {
    message = `${n} chia hết cho cả 3 và 5.`;
  } else {
    message = `${n} không chia hết cho cả 3 và 5.`;
  }
  console.log(message);
  return message;
};

let season = function (month) {
  month = Number(month);
  if (month == 3 || month == 4 || month == 5) {
    message = `Tháng ${month} thuộc mùa xuân.`;
  } else if (month == 6 || month == 7 || month == 8) {
    message = `Tháng ${month} thuộc mùa hè.`;
  } else if (month == 9 || month == 10 || month == 11) {
    message = `Tháng ${month} thuộc mùa thu.`;
  } else if (month == 12 || month == 1 || month == 2) {
    message = `Tháng ${month} thuộc mùa đông.`;
  } else {
    message = `Tháng ${month} không hợp lệ.`;
  }
  console.log(message);
  return message;
};

let trafficLight = function (light) {
  if (light == "Red" || light == "red") {
    message = `${light}: Bạn phải dừng lại!`;
  } else if (light == "Green" || light == "green") {
    message = `${light}: Bạn được phép di chuyển!`;
  } else if (light == "Yellow" || light == "yellow") {
    message = `${light}: Bạn cần giảm tốc độ và dừng lại!`;
  } else {
    message = `Tín hiệu ${light} không hợp lệ. Bạn chỉ được phép nhập một trong ba giá trị: 'Red', 'Green' hoặc 'Yellow'!`;
  }
  console.log(message);
  return message;
};

let calcCommissions = function (totalSales) {
  totalSales = Number(totalSales);
  if (0 <= totalSales && totalSales <= 100000000) {
    message = `Số tiền hoa hồng bạn nhận được cho doanh số ${totalSales} là ${
      0.05 * totalSales
    }`;
  } else if (totalSales <= 300000000) {
    message = `Số tiền hoa hồng bạn nhận được cho doanh số ${totalSales} là ${
      0.1 * totalSales
    }`;
  } else {
    message = `Số tiền hoa hồng bạn nhận được cho doanh số ${totalSales} là ${
      0.2 * totalSales
    }`;
  }
  console.log(message);
  return message;
};

let isLeafYear = function (year) {
  year = Number(year);
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 400 === 0)
  ) {
    message = `Năm ${year} là năm nhuận.`;
  } else {
    message = `Năm ${year} là không phải là năm nhuận.`;
  }
  console.log(message);
  return message;
};

let daysOfMonth = function (month, year) {
  let today = new Date();
  month = Number(month) || today.getMonth() + 1;
  year = Number(year) || today.getFullYear();
  if (month == 2) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 4 === 0 && year % 400 === 0)
    ) {
      message = `Tháng ${month} năm ${year} có 29 ngày.`;
    } else {
      message = `Tháng ${month} năm ${year} có 28 ngày.`;
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    message = `Tháng ${month} năm ${year} có 30 ngày.`;
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    message = `Tháng ${month} năm ${year} có 31 ngày.`;
  } else {
    message = `Tháng ${month} năm ${year} không hợp lệ.`;
  }
  console.log(message);
  return message;
};

let calcGrade = function (point) {
  point = Number(point);
  if (point < 0 || point > 10) {
    message = `Điểm trung bình ${point} không hợp lệ. Chỉ chấp nhận giá trị từ 0 - 10`;
  } else if (0 <= point && point < 4) {
    message = `Điểm trung bình ${point}: Xếp loại F`;
  } else if (point < 5.5) {
    message = `Điểm trung bình ${point}: Xếp loại D`;
  } else if (point < 7) {
    message = `Điểm trung bình ${point}: Xếp loại C`;
  } else if (point < 8.5) {
    message = `Điểm trung bình ${point}: Xếp loại B`;
  } else if (point <= 10) {
    message = `Điểm trung bình ${point}: Xếp loại A`;
  }
  console.log(message);
  return message;
};

let solveEquation = function (a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (a == 0 && b == 0 && c == 0) {
    message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 có vô số nghiệm.`;
  } else if (a == 0 && b == 0 && c != 0) {
    message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 vô nghiệm.`;
  } else if (a == 0 && b != 0 && c != 0) {
    message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 có một nghiệm x = ${
      (-1 * c) / b
    }`;
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 vô nghiệm.`;
    } else if (delta == 0) {
      message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 có nghiệm kép x1 = x2 = ${
        (-1 * b) / (2 * a)
      }`;
    } else {
      let sqrtDelta = Math.sqrt(delta);
      let myArray = [];
      myArray.push(
        (-1 * b + sqrtDelta) / (2 * a),
        (-1 * b - sqrtDelta) / (2 * a)
      );
      message = `Phương trình ${a}x^2 + ${b}x + ${c} = 0 có 2 nghiệm phân biệt [x1, x2] = [${myArray}]`;
    }
  }
  console.log(message);
  return message;
};

let fibonacci = function (n) {
  n = Number(n);
  let fibo1 = 0;
  let fibo2 = 1;
  let myArray = [0, 1];
  if (n < 3 && n != 2) {
    message = `Không tồn tại dãy Fibonacci có ${n} phần tử.`;
  } else if (n < 3 && n == 2) {
    message = `Dãy Fibonacci có ${n} phần tử là [${myArray}]`;
  } else {
    let fibo3;
    for (let i = 1; i <= n - 2; ++i) {
      fibo3 = fibo1 + fibo2;
      myArray.push(fibo3);
      fibo1 = fibo2;
      fibo2 = fibo3;
    }
    message = `Dãy Fibonacci có ${n} phần tử là [${myArray}]`;
  }
  console.log(message);
  return message;
};

let isPalindrome = function (n) {
  n = Number(n);
  const N_INPUT = n;
  let nRevert = 0;
  let isResult;
  // Dao nguoc so.
  while (n > 0) {
    nRevert = nRevert * 10 + (n % 10);
    n = Math.floor(n / 10); // Lam tron xuong
  }

  if (N_INPUT == nRevert) {
    message = `Số ${N_INPUT} là số Palindrome`;
    isResult = true;
  } else {
    message = `Số ${N_INPUT} là không phải là số Palindrome`;
    isResult = false;
  }
  console.log(message);
  return [message, isResult];
};

let sumOfPalindrome = function (n) {
  n = Number(n);
  let sum = 0;
  let myArray = [];
  for (let i = 1; i <= n; ++i) {
    if (isPalindrome(i)[1] == true) {
      sum += i;
      myArray.push(i);
    }
  }
  message = `Các số Palindrome trong đoạn từ [1-${n}] là [${myArray}] và có tổng là ${sum}`;
  console.log(message);
  return message;
};

// Funtion DOM

function displayFunctDesc(e) {
  let optionLength = document.querySelectorAll("#functName option").length;
  let myElement;
  for (let i = 1; i <= optionLength; ++i) {
    if (e.value == i) {
      myElement = document
        .querySelector(`.right-box .right-item:nth-child(${i})`)
        .classList.remove("d-none");
    } else {
      myElement = document
        .querySelector(`.right-box .right-item:nth-child(${i})`)
        .classList.add("d-none");
    }
  }

  document.getElementById("functInput").value = null;
}

function runFunction() {
  let functNameEle = document.getElementById("functName");
  let functName = functNameEle.options[functNameEle.selectedIndex].text;

  let functArg = document.getElementById("functInput").value;

  document.getElementById(
    "result-input"
  ).innerText = `Input: ${functName}(${functArg})`;

  let argArray = functArg.split(",");
  switch (functName) {
    case "findBMI":
      document.getElementById("result-output").innerText = `Output: ${findBMI(
        ...argArray
      )}`;
      break;
    case "findMaxOfThree":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${findMaxOfThree(...argArray)}`;
      break;
    case "calcWaterBill":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${calcWaterBill(...argArray)}`;
      break;
    case "calcTaxiFee":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${calcTaxiFee(...argArray)}`;
      break;
    case "checkNumberIsPrime":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${checkNumberIsPrime(...argArray)}`;
      break;
    case "findFirstLastNumber":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${findFirstLastNumber(...argArray)}`;
      break;
    case "isOddNumber":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${isOddNumber(...argArray)}`;
      break;
    case "divisibleByThreeAndFive":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${divisibleByThreeAndFive(...argArray)}`;
      break;
    case "season":
      document.getElementById("result-output").innerText = `Output: ${season(
        ...argArray
      )}`;
      break;
    case "trafficLight":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${trafficLight(...argArray)}`;
      break;
    case "calcCommissions":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${calcCommissions(...argArray)}`;
      break;
    case "isLeafYear":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${isLeafYear(...argArray)}`;
      break;
    case "daysOfMonth":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${daysOfMonth(...argArray)}`;
      break;
    case "calcGrade":
      document.getElementById("result-output").innerText = `Output: ${calcGrade(
        ...argArray
      )}`;
      break;
    case "solveEquation":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${solveEquation(...argArray)}`;
      break;
    case "fibonacci":
      document.getElementById("result-output").innerText = `Output: ${fibonacci(
        ...argArray
      )}`;
      break;
    case "isPalindrome":
      document.getElementById("result-output").innerText = `Output: ${
        isPalindrome(...argArray)[0]
      }`;
      break;
    case "sumOfPalindrome":
      document.getElementById(
        "result-output"
      ).innerText = `Output: ${sumOfPalindrome(...argArray)}`;
      break;
    default:
      break;
  }
}
