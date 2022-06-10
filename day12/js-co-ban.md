# Javascript cơ bản

## 1. Liên kết js với html

1. Inline: Dùng thuộc tính sự kiện (onclick...)
2. Internal: Dùng thẻ Script đặt trong thẻ head hoặc thẻ body
3. External: Dùng thẻ Script để liên kết đến một file .js ở bên ngoài tài liệu html

## 2. Sử dụng DevTool để làm việc với js

Trên trình duyệt bật DevTool vào mục Console để thao tác thuận tiện với js

## 3. Biến

### 3.1. Khai báo biến

Khai báo biến bằng cách sử dụng một trong những từ khóa như:

1. Var (Ít còn được sử dụng trong ES6 - Khai báo biến mà giá trị biến có thể thay đổi được)
2. Let (Khai báo biến mà giá trị biến có thể thay đổi được)
3. Const (Khai báo biến mà không cho phép thay đổi giá trị của biến)

### 3.2. Quy ước đặt tên biến

1. Tên biến chỉ được chứa ký tự, số, hoặc ký tự đặc biệt $ và \_
2. Tên biến không được bắt đầu bằng một số
3. Tên biến có phân biệt chữ hoa, chữ thường
4. Tên biến không được trùng với từ khóa của JavaScript

### 3.3. Quy tắc đặt tên biến

1. JavaScript sử dụng phong cách camelCase cho tên biến, hoặc hàm
2. Với hằng số - const - sử dụng UPPERCASE
3. Tên biến phải có ý nghĩa

### 3.4. Một số ví dụ về khai báo biến

1. let myName = "Hùng";
2. const MY_BIRTHDAY = "15/04/1995";

Có thể khai báo biến mà không gắn giá trị (chỉ áp dụng với let và var)

## 4. Kiểu dữ liệu

### 4.1. Number

Là kiểu số (-2^53 + 1 đến 2^53 - 1)
Một số giá trị đặc biệt như: Infinity (dương vô cực: 1/0), -Infinity (âm vô cực: -1/0), NaN (not a number)
VD: let a = 5;

### 4.2. String

Là kiểu văn bản
Khai báo được đặt trong dấu nháy đơn hoặc nháy kép
VD: let myName = 'Hùng';
let herName = "Vân Anh";

### 4.3. Boolean

Là kiểu logic (luận lý), chỉ có 2 giá trị đúng hoặc sai (true or false)
VD: let isMale = true;

### 4.4. object

Là một kiểu dữ liệu đặc biệt, cho phép lưu trữ cùng lúc nhiều giá trị trong một biến duy nhất, các dữ liệu được lưu trong object có thể thuộc bất kỳ kiểu nào.
VD: let myInfo {
&nbsp;&nbsp;&nbsp;&nbsp;firstname: "Hùng",
&nbsp;&nbsp;&nbsp;&nbsp;lastname: "Nguyễn Văn",
&nbsp;&nbsp;&nbsp;&nbsp;dob: "15/04/1995",
&nbsp;&nbsp;&nbsp;&nbsp;gender: "Male",
&nbsp;&nbsp;&nbsp;&nbsp;hocVan: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cap1: "Trường tiểu học Nam Sơn",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cap2: "THCS Nam Sơn",
&nbsp;&nbsp;&nbsp;&nbsp;}
}

Gọi tên thuộc tính trong một object bằng 2 cách:

1. objectName.Property (VD: myInfo.firstname)
2. objectName["Property"] (VD: myInfo["gender"])

### 4.5. function

Function được sử dụng để đóng gói một đoạn mã để xử lý một công việc/tính toán giá trị nào đó, cho phép tái sử dụng đoạn mã ở nhiều nơi trong chương trình.
VD: Khai báo hàm
let myFunc = alertName () {
&nbsp;&nbsp;&nbsp;&nbsp;alert("My name is Hung");
&nbsp;&nbsp;&nbsp;&nbsp;prompt("What is your name?");
}

Để gọi hàm ta sử dụng: myFunc();
Lưu ý: Nếu hàm cần truyền tham số thì lúc gọi hàm phải truyền các đối số tương ứng.

Một số hàm builtin (builtin functions - hàm được xây dựng sẵn) ví dụ như: console.log(), typeof...

### 4.6. null

null đại diện cho một đối tượng không tồn tại

### 4.7. undefined

undefined đại diện cho một đối tượng chưa được gán giá trị (ví dụ khai báo biến mà chưa gắn giá trị cho biến).

### 4.8. bigint và symbol

Đây là 2 kiểu dữ liệu hiếm khi sử dụng

**_Bạn có thể sử dụng hàm "typeof" để kiểm tra kiểu dữ liệu của một biến_**
VD: let myName = "Hùng";
typeof myName;

> Trả về: "String"

## 5. Javascript Operators (Toán tử js)

### 5.1. Tổng quan

Toán tử trong js chia làm 5 loại:

1. Arithmetic
2. Comparision
3. Assignment
4. Logical
5. Bitwise

**Những lưu ý**

> Quy tắc thực hiện biểu thức theo thứ tự từ trái qua phải, dựa theo độ ưu tiên toán tử. Các toán tử có độ ưu tiên khác nhau, quyết định phép tính nào sẽ được thực hiện trước.
> JavaScript cũng **_tự động chuyển đổi_** các kiểu dữ liệu của các toán hạng về kiểu phù hợp khi thực hiện các biểu thức tính toán hay so sánh.

Một số builtin function ép kiểu:

1. Number: Ép về kiểu số. Lưu ý:
   1.1. Number("1") > 1
   1.2. Number(null) > 0
   1.3. Number(undefined) > NaN
   1.4. Number(true) > 1
   1.5. Number(false) > 0
   1.6. Number(" 99 ") > 99
   1.7. Number("14ab") > NaN
   1.8. Number("") > 0

2. String: Ép về kiểu văn bản, ép mọi thể loại về dạng văn bản.
3. Boolean: Ép về kiểu luận lý. Lưu ý: Những giá trị false, "", 0, null, undefined, NaN khi chuyển về Boolean luôn nhận giá trị là false, còn lại tất cả đều chuyển về là true.

### 5.2. Arithmetic Operators (Toán tử số học)

Đối với kiểu string phép + chuyển đổi kiểu của toán hạng về kiểu string và thực hiện nối chuỗi.
Phép nối chuỗi chỉ hoạt động duy nhất với toán tử + , với những toán tử số học khác, mọi kiểu dữ liệu được chuyển về number

### 5.3. Assignment Operators (Toán tử gán)

Toán tử gán chỉ hoạt động với biến. VD: let a = 5;
Toán tử gán kết hợp với toán tử số học: VD: x += 1;
Toán tử Increment, Decrement (tự tăng/giảm) có 2 cách viết:

1. Cách viết - prefix (++i / --i):
   &nbsp;&nbsp;&nbsp;&nbsp;Thực hiện phép tính tăng/giảm giá trị của biến đi 1. Tuy nhiên nó thực hiện tăng/giảm giá trị của biến trước rồi mới tính toán sau.
2. Cách viết - postfix (i++ / i--):
   &nbsp;&nbsp;&nbsp;&nbsp;Thực hiện phép tính tăng/giảm giá trị của biến đi 1. Tuy nhiên nó thực hiện tính toán trước, sau đó mới tăng/giảm giá trị của biến sau.
3. Ví dụ:
   let a = 1;
   let b = a++ + 1; // a = 2, b = 2
   let c = ++a + 3; // a = 3, c = 6
   let d = a++ + ++a - a-- - --a; // d = 3 + 5 - 5 - 3 = 0, a = 3

### 5.4. Comparision Operators (Toán tử so sánh)

Toán tử so sánh == != > >= < <= === !==
Kết quả của các phép so sánh luôn luôn là một giá trị boolean

== != > >= < <= tự động chuyển đổi kiểu của 2 toán hạng về cùng một kiểu và thực hiện so sánh
VD: 1 == 1; // true
1 == "1"; // true
5 != "5"; // false

=== và !== (strict comparison) so sánh cả kiểu giá trị của dữ liệu
VD: 1 === 1; // true
1 === "1"; // false

So sánh chuỗi: JavaScript sử dụng bảng mã Unicode, khi so sánh 2 chuỗi, nó thực hiện so sánh từng ký tự dựa theo thứ tự trong bảng mã (Unicode table)

null, undefined, NaN
null và undefined là 2 trường hợp đặc biệt

> null == 0; // false
> null <= 0; // true
> null == undefined; // true
> null === undefined; // false

Mọi biểu thức so sánh với NaN đều cho kết quả là false

### 5.5. Logical Operators (Toán tử logic)

Toán tử logic || - or, && - and, ! - not

|| - or tìm giá trị đúng đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối cùng trong biểu thức

> true || false; // true
> 0 || 1; // 1
> 0 || false || ""; // ""
> "abc" || "xyz"; // "abc"

&& - and tìm giá trị sai đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối cùng trong biểu thức

> true && false; // false
> 0 && 1; // 0
> 0 && false && ""; // 0
> "abc" && "xyz"; // "xyz"

! - not chuyển giá trị về kiểu boolean và phủ định nó

> !""; // true
> !"123"; // false
> !!!!!!false; // false

### 5.6. Bitwise Operators

> Chưa tìm hiểu
