//set target number to a random number between 50 and 100
	var targetScore = (Math.floor(Math.random() * 50) +50);
	var yourScore = 0;
	var winning = 0;
	var losing = 0;
	
	//random numbers for each gem	
	greenVal = Math.floor(Math.random() * 16) + 10; //green: 10 - 25
	redVal = Math.floor(Math.random() * 11) + 6; //red: 6 - 16
	blueVal = Math.floor(Math.random() * 11) + 3; //blue: 0 - 7
	yellowVal = Math.floor(Math.random() * 8); //yellow: 3 - 13

  //see what the value of each crystal has been choosen
	console.log(greenVal);
	console.log(redVal);
	console.log(blueVal);
	console.log(yellowVal);

  //show the target score to the html 
	$("#guess").text(targetScore);

  //the function that resets the game
	function reset(){
		targetScore = (Math.floor(Math.random() * 50) +50);
		yourScore = 0;
		greenVal = Math.floor(Math.random() * 16) + 10; //green: 10 - 25
		redVal = Math.floor(Math.random() * 11) + 6; //red: 6 - 16
		blueVal = Math.floor(Math.random() * 11) + 3; //blue: 0 - 7
		yellowVal = Math.floor(Math.random() * 8); //yellow: 3 - 13

	};

  //on click function that adds the value of the choosen crystal to your score
	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		console.log(crystalValue);

    	if(crystalValue === 1){
    		var randomValue = greenVal;
    		console.log(randomValue);
    	}
    	else if(crystalValue === 2){
    		var randomValue = redVal;
    		console.log(randomValue);
    	}
    	else if(crystalValue === 3){
    		var randomValue = blueVal;
    		console.log(randomValue);
    	}
    	else if(crystalValue === 4){
    		var randomValue = yellowVal;
    		console.log(randomValue);
    	}

    	yourScore = yourScore + randomValue;
    	console.log(yourScore);
    	// print targetScore to the html dom
    	$("#totalScore").text(yourScore);	

    //checks your score to see if the player wins then resets  
		if (yourScore === targetScore) {
      		winning++;
      		reset();
      		$(".victory").text(winning);
      		$("#guess").text(targetScore);
      		$("#totalScore").text(yourScore); 		
  	}

    //if the score is higher than the target score and reset the game
  	else if (yourScore >= targetScore) {
   		losing++;
    		reset();
    		$(".defeat").text(losing);
    		$("#guess").text(targetScore);
    		$("#totalScore").text(yourScore);
    	}
    });
