let round = prompt("ต้องการเล่นเกมกี่รอบ ! ")
let score = 0
for(var  i = 1; i <= round; i++) {
    var answar = prompt("หัว หรือ ก้อย ตอบมาเลย")
    var random_answar = ""

    if (Math.floor(Math.random()*10) <=4 ) {
        random_answar = "หัว"
    } else {
        random_answar = "ก้อย"
    }

    if (answar == random_answar) {
        alert_answar = "ยินดีด้วยคุณตอบถูก"
    } else {
        alert_answar = "เสียใจด้วยคุณตอบผิด"
    }

    console.log(random_answar + ":" + answar)

    const newLocal = " คำตอบคือ "
    document.getElementById("game-answer").innerHTML += " เกมที่ " + i + " คุณตอบ " + answar + " คำตอบคือ " + random_answar + " : " + alert_answar +"<br>"
}

document.getElementById("game-list").innerHTML = round
