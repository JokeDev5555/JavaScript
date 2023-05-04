let age = prompt("กรุณากรอกอายุของคุณ")
// รู้จักกับการใช้งานเงื่อนไข if else
if(age > 13) {
    document.getElementById("content").innerHTML = "คุณอายุมากกว่า 13 ปี <br> <iframe width=\"560\" height=\"315\" src= \"https://www.youtube.com/embed/i4X99SF1xy8\" title=\"YouTube video player\" frameborder=\"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
} else {
    document.getElementById("content").innerHTML = "คุณอายุน้อยกว่า 13 ปี <br> <iframe width=\"560\" height = \"315\" src = \"https://www.youtube.com/embed/Izk50mqjs60\" title= \"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}