window.onload = function() {
	var boardSize = 9;
	var whoWon = document.querySelector(".winner");
	
	for (var i=0; i<boardSize; i++){
		var newSpace = document.createElement("div");
		newSpace.className += "boardspace";
		newSpace.innerHTML = "<span>Click here!<span>";
		newSpace.id=[i];
		document.querySelector("#board").appendChild(newSpace);
	}
	var space = document.querySelectorAll(".boardspace");
	for (var e=0; e<space.length; e++){
		space[e].addEventListener("click", doTurn);
	}
	var counter = 0;
	function doTurn(){
		if(whoWon.innerHTML != ""){
			return;
		}
		else{
			if( counter % 2 === 0){
				this.innerHTML = "<h2>X</h2>";
				this.classList.add("touched");
				checkItOut();
			}
			else{
				this.innerHTML = "<h2>O</h2>";
				this.classList.add("otouched");
				checkItOut();
			}
		}

		counter++;
	}
	
	function checkItOut(){
		if((space[0].classList.contains("touched"))&&(space[3].classList.contains("touched"))&&(space[6].classList.contains("touched"))||
			(space[0].classList.contains("touched"))&&(space[1].classList.contains("touched"))&&(space[2].classList.contains("touched"))||
			(space[0].classList.contains("touched"))&&(space[4].classList.contains("touched"))&&(space[8].classList.contains("touched"))||
			(space[3].classList.contains("touched"))&&(space[4].classList.contains("touched"))&&(space[5].classList.contains("touched"))||
			(space[6].classList.contains("touched"))&&(space[7].classList.contains("touched"))&&(space[8].classList.contains("touched"))||
			(space[1].classList.contains("touched"))&&(space[4].classList.contains("touched"))&&(space[7].classList.contains("touched"))||
			(space[2].classList.contains("touched"))&&(space[5].classList.contains("touched"))&&(space[8].classList.contains("touched"))||
			(space[2].classList.contains("touched"))&&(space[4].classList.contains("touched"))&&(space[6].classList.contains("touched"))){
			whoWon.innerHTML = "X Wins!!";
			event.preventDefault();
		}
		else if((space[0].classList.contains("otouched"))&&(space[3].classList.contains("otouched"))&&(space[6].classList.contains("otouched"))||
			(space[0].classList.contains("otouched"))&&(space[1].classList.contains("otouched"))&&(space[2].classList.contains("otouched"))||
			(space[0].classList.contains("otouched"))&&(space[4].classList.contains("otouched"))&&(space[8].classList.contains("otouched"))||
			(space[3].classList.contains("otouched"))&&(space[4].classList.contains("otouched"))&&(space[5].classList.contains("otouched"))||
			(space[6].classList.contains("otouched"))&&(space[7].classList.contains("otouched"))&&(space[8].classList.contains("otouched"))||
			(space[1].classList.contains("otouched"))&&(space[4].classList.contains("otouched"))&&(space[7].classList.contains("otouched"))||
			(space[2].classList.contains("otouched"))&&(space[5].classList.contains("otouched"))&&(space[8].classList.contains("otouched"))||
			(space[2].classList.contains("otouched"))&&(space[4].classList.contains("otouched"))&&(space[6].classList.contains("otouched"))){
			whoWon.innerHTML = "O Wins!!";
			event.preventDefault();
		}
	}




};


/*possible wins

036
012
048
345
678
147
258
246


*/
