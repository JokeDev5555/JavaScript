// ทำความรู้จักคำสั่ง Prompt / สร้างเเอพสุ่มเลข
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
console.log(lotto_number)
// Function สุ่มเลข
// Math.floor(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10)) // สุม 0-9

// console.log(Math.floor(Math.random() * 100)) // สุม 0-99

// เเสดงผลที่ออกทางหน้า HTML
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)

// เเสดงผลที่ซื้อทางหน้า HTML
document.getElementById("lotto_sell").innerHTML = lotto_number


// ค่าความจริงใน JavaScript

// == ไม่เช็คชนิดข้อมูล
// === เช็คชนิดข้อมูล
// != เช็คชนิดข้อมูบไม่ให้ตรงกัน
// !== เช็คชนิดข้อมูบไม่ให้ตรงกัน - เช็คชนิดข้อมูล

console.log(1 == 1)
console.log(2 == 2)
console.log(3 == 3)
console.log(4 == "4")
console.log(5 == 6)

console.log("6" === "6")
console.log("Hello" === "Hello")
console.log("Hello" === "Hello")
console.log(4 === "4")

console.log(6 != 6)
console.log(5 != 6)
console.log("6" != 6)
console.log("6" !== 6)

console.log(10 < 5)
console.log(10 > 5)
console.log(10 >= 10)
console.log(5 <= 0)
console.log(10+10 <= 20)
console.log(10+10 <= -20)
