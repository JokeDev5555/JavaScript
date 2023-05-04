let qrt = prompt("จำนวนสินค้า")
let price = 0
for(var i = 1; i <= qrt; i++)  {
    let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
    price = price + parseInt(item_price) 
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "  + i +  " : " + item_price + " บาท"+"<br>"  

    document.getElementById("result").innerHTML = "ราคาสินค้ารวม " + price + " บาท"
}

//  parseInt เเปลงชนิดข้อมูล สติง เป็น ตัวเลขจำนวนเต็ม
//  parseFloat เเปลงชนิดข้อมูล สติง เป็น ตัวเลขจำนวน