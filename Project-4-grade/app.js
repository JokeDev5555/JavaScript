let score = prompt("กรอกคะเเนนของคุณ")
if (score >= 80) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 4"

} else if (score >= 75) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 3.25"

} else if (score >= 70) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 3"

} else if (score >= 65) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 2.25"

} else if (score >= 60) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 2"

} else if (score >= 55) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 1.25"

} else if (score >= 50) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 1"

} else {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณได้เกรด 0"

}

document.getElementById("user_grade").innerHTML = score