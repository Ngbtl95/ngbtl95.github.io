var mas = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']


function open_img(obj){
event.preventDefault();
 var id = obj.id

 var img = document.getElementById(id);
 var addr = img.src;



 img_name = addr.match(/([0-9]+)(\.jpg)/i)//[1] - 1;
 img_number = Number(img_name[1]);
 img_name = img_name[0]


 addr = addr.replace("little-image", "big-image");
 var div = document.createElement('div');
 div.className = "popup";
 container = document.getElementsByClassName('container')[0]
 popup_height = container.offsetHeight + 'px'
 div.style.height = popup_height;
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


 addEventListener('keydown', function close(event){
 	event.preventDefault();
 	if (event.keyCode == 27){
 		var el = document.getElementsByClassName('popup')[0];
 		el.parentNode.removeChild(el);
		removeEventListener('keydown', close)
 		}
 	if (event.keyCode == 39){ //right
 		if (img_number < mas.length)
 			img_number++
 		else
 			img_number = 1
 		img.src = addr.replace(img_name, img_number + '.jpg')
 		}
 	if (event.keyCode == 37){ //left
 		if (img_number > 1)
 			img_number--
 		else
 			img_number = mas.length
 		img.src = addr.replace(img_name, img_number + '.jpg')
 		}
 });

return;
}