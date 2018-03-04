window.onload = function() {
	var boardSize = 9;
	var whoseTurn = document.querySelector(".whose-turn");
	var whoWon = document.querySelector(".winner");
	var counter = 0;

	
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
	
	function doTurn(){
		if(whoWon.innerHTML != ""){
			return;
		}
		else{
			if( counter % 2 === 0){
				this.innerHTML = "<h2>X</h2>";
				this.classList.add("x");
				
			}
			else{
				this.innerHTML = "<h2>O</h2>";
				this.classList.add("o");
			}
			this.classList.add("touched");
			this.removeEventListener("click", doTurn);
			checkItOut();
		}

		counter++;
		if(counter % 2 ===0 ){
			whoseTurn.innerHTML = "X's turn!";		
		}
		else{
			whoseTurn.innerHTML = "O's turn!";
		} 
	}

	function replaceTxt(){
		for (var e=0; e<space.length; e++){
			if(space[e].classList.contains("touched")){
				console.log("hi");
			}
			else{
				space[e].innerHTML = "<span><i class='fa fa-smile-o' aria-hidden='true'></i></span>";
			}
		}
	}
	
	function checkItOut(){
		if((space[0].classList.contains("x"))&&(space[3].classList.contains("x"))&&(space[6].classList.contains("x"))||
			(space[0].classList.contains("x"))&&(space[1].classList.contains("x"))&&(space[2].classList.contains("x"))||
			(space[0].classList.contains("x"))&&(space[4].classList.contains("x"))&&(space[8].classList.contains("x"))||
			(space[3].classList.contains("x"))&&(space[4].classList.contains("x"))&&(space[5].classList.contains("x"))||
			(space[6].classList.contains("x"))&&(space[7].classList.contains("x"))&&(space[8].classList.contains("x"))||
			(space[1].classList.contains("x"))&&(space[4].classList.contains("x"))&&(space[7].classList.contains("x"))||
			(space[2].classList.contains("x"))&&(space[5].classList.contains("x"))&&(space[8].classList.contains("x"))||
			(space[2].classList.contains("x"))&&(space[4].classList.contains("x"))&&(space[6].classList.contains("x"))){
			whoseTurn.remove();
			whoWon.innerHTML = "X Wins!!";
			event.preventDefault();
			replaceTxt();
		}
		else if((space[0].classList.contains("o"))&&(space[3].classList.contains("o"))&&(space[6].classList.contains("o"))||
			(space[0].classList.contains("o"))&&(space[1].classList.contains("o"))&&(space[2].classList.contains("o"))||
			(space[0].classList.contains("o"))&&(space[4].classList.contains("o"))&&(space[8].classList.contains("o"))||
			(space[3].classList.contains("o"))&&(space[4].classList.contains("o"))&&(space[5].classList.contains("o"))||
			(space[6].classList.contains("o"))&&(space[7].classList.contains("o"))&&(space[8].classList.contains("o"))||
			(space[1].classList.contains("o"))&&(space[4].classList.contains("o"))&&(space[7].classList.contains("o"))||
			(space[2].classList.contains("o"))&&(space[5].classList.contains("o"))&&(space[8].classList.contains("o"))||
			(space[2].classList.contains("o"))&&(space[4].classList.contains("o"))&&(space[6].classList.contains("o"))){
			whoseTurn.remove();
			whoWon.innerHTML = "O Wins!!";
			event.preventDefault();
			replaceTxt();
		}
		else if (document.querySelectorAll('.touched').length == space.length){
			whoseTurn.remove();
			whoWon.innerHTML = "nobody won...";
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
