let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
let rundom_number = Math.floor(Math.random() * 1000)

document.getElementById("rumdom").innerHTML = rundom_number
if (lotto_number == rundom_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัลเลขท้าย 3 ตัว"


} else { 
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัลเลขท้าย 3 ตัว"

} 
document.getElementById("lotto_sell").innerHTML = lotto_number

let age = prompt("กรอกอายุของคุณ")

if (age < 4) {
    document.getElementById("school_number").innerHTML = "ศูนย์เด็กเล็ก"

} else if (age == 4) {
    document.getElementById("school_number").innerHTML = "ชั้นอนุบาลปีที่ 1"

} else if (age == 5) {
    document.getElementById("school_number").innerHTML = "ชั้นอนุบาลปีที่ 2"

} else if (age == 6) {
    document.getElementById("school_number").innerHTML = "ชั้นอนุบาลปีที่ 3"

}else if (age == 7) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 1"

} else if (age == 8) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 2"

} else if (age == 9) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 3"

} else if (age == 10) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 4"

} else if (age == 11) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 5"

} else if (age == 12) {
    document.getElementById("school_number").innerHTML = "ชั้นประถมศึกษาปีที่ 6"

} else if (age == 13) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 1"

} else if (age == 14) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 2"

} else if (age == 15) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 3" 

} else if (age == 16) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 4"   

} else if (age == 17) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 5"

} else if (age == 18) {
    document.getElementById("school_number").innerHTML = "มัธยมศึกษาปีที่ 6"

} else if (age == 19) {
    document.getElementById("school_number").innerHTML = "อุดมศึกษาปีที่ 1"  

} else if (age == 20) {
    document.getElementById("school_number").innerHTML = "อุดมศึกษาปีที่ 2" 

} else if (age == 21) {
    document.getElementById("school_number").innerHTML = "อุดมศึกษาปีที่ 3" 

} else if (age == 22) {
    document.getElementById("school_number").innerHTML = "อุดมศึกษาปีที่ 4"

} else {
    document.getElementById("school_number").innerHTML = "จบการศึกษาเเล้ว" 
    
}