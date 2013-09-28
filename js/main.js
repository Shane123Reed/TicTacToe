var turn = 1;

/*document.addEventListener('keydown', function(event) {
    if(event.keyCode == 82) {
        alert('R was pressed');
    }
}*/

function playBox() {
	
	switch(turn) {
		case 1:
			event.target.innerHTML="<img src='img/dotsx.png'>";
			break;
		default:
			event.target.innerHTML="<img src='img/dots.png'>";
			turn = 0;
			break;
	}
	turn += 1;

	for(i=1; i<=9; ++i) {
			cellArray[(i-1)%3][Math.floor((i-1)/3)] =
				document.getElementById("cell_"+i).innerHTML;
	}
	for(x=0; x<=2; ++x) {
		if(cellArray[0][x] == cellArray[1][x] &&
		   cellArray[1][x] == cellArray[2][x] &&
		   cellArray[2][x] != "") {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(img/Gondowins.png)';
			var container = document.getElementById('container');
			container.style.opacity = "0.2";
			
		}
			
		if(cellArray[x][0] == cellArray[x][1] &&
		   cellArray[x][1] == cellArray[x][2] &&
		   cellArray[x][2] != "") {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(img/Gondxwins.png)';
			var container = document.getElementById('container');
			container.style.opacity = "0.2";
			
			}
		
	}

}

var cellArray = [["", "", ""], ["", "", ""], ["", "", ""]];

function navCells() {	
	/*

	*/
}
