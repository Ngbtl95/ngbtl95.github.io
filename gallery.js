var mas = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] // массив картинок
var big_img = ["1b.jpg"]
var to = -1;  // Счетчик, указывающий на текущую картинки

function open_img(obj) // открытие картинки
{     	
 event.preventDefault();
 document.body.style.overflowY = "hidden";
 var id = obj.id
 var img = document.getElementById(id);
 var addr = img.src;
 addr = addr.replace("little-image", "big-image");
 var div = document.createElement('div');
 div.className = "popup";
 document.body.appendChild(div)
 var div2 = document.createElement('div');
 div2.className = "popup_bg";
 div.appendChild(div2);
 

 var a = document.createElement('a');
 a.href = "";
 a.id = "modal_close";
 a.innerHTML = "X";
 div2.appendChild(a);
 var img = document.createElement('img');
 img.src = addr;
 
 img.className = "popup_img"
 div.appendChild(img);
 
}