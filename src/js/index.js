function MoveItem0(){
	var item = document.getElementById('small_box');
	var pos = 0;
	var id = setInterval(frame, 30);

	function frame(){
		pos++;

		item.style.left = pos + "px";

		if(pos > 100){
			clearInterval(id);
			item.onclick = null;
		}
	}
}

function MoveItem1(width=0){
	var item = document.getElementById('medium_box');
	var pos = width;
	var id = setInterval(frame, 30);

	item.style["background-color"] = "green";
	function frame(){
		if(pos < 100){
			pos += 6;
		} else if(pos < 250){
			pos += 4;
		} else {
			pos++;
		}
		//pos += 2;

		item.innerHTML = pos + "px";
		item.style.width = pos+"px";

		if(pos > 300){
			clearInterval(id);
			item.setAttribute("onclick", "ResetItem1()");
			item.innerHTML = item.getAttribute("onclick");
		}
	}
}

function ResetItem1(){
	var item = document.getElementById('medium_box');
	var pos = parseInt(item.style.width);
	var id = setInterval(frame, 30);
	
	item.style["background-color"] = "red";

	function frame(){
		if(pos > 250){
			pos -= 6;
		} else if(pos > 100){
			pos -= 4;
		} else {
			pos--;
		}
		item.innerHTML = pos + "px";
		item.style.width = pos+"px";

		if(pos < 50){
			clearInterval(id);
			item.setAttribute("onclick", "MoveItem1("+pos+")");
			item.innerHTML = item.getAttribute("onclick");
		}
	}
}