
// app specs
var app = angular.module('Hangman',[]);

// assign a/ use a multiple controller to this app

app.controller('Game',['$scope',function($scope){
	  var words = ["rat","god","dog","sat","cute"];
	  var selectedWord = '';
	  $scope.incorrectGuesses = [];
	  $scope.correctGuesses = [];
	  $scope.guesses = 6;
	  $scope.displaywords = '';
	  $scope.input = {
	  	letter : '',
	  }

	  var selectwords=function(){
	  		var index = Math.round(Math.random()*words.length);
	  		return words[index];
	  }

	  
	  // NEW GAME function
	  var newgame = function(){
	  $scope.incorrectGuesses = [];
	  $scope.correctGuesses = [];
	  $scope.guesses = 6;
	  $scope.displaywords = '';
	  selectedWord = selectwords();

	  var tempselectedwords = '';
	  for (var i =0 ;i<selectedWord.length; i++) {
			tempselectedwords += "*";
	  }  
	  $scope.displaywords = tempselectedwords;
	  console.log($scope.displaywords);
	  }

	  //newgame();

		$scope.letterChosen = function(){
	  	// checking whether the input is in correct guesses array
	  	for (var i = 0; i < $scope.correctGuesses.length; i++) {
	  		 if($scope.correctGuesses[i].toLowerCase() == $scope.input.letter.toLowerCase()){
	  		 		$scope.input.letter = '';
	  		 		return;
	  		 }
	  	}
	  	// checking whether the input is in incorrectguesses array
	  	for (var i = 0; i < $scope.incorrectGuesses.length; i++) {
	  		 if($scope.incorrectGuesses[i].toLowerCase() == $scope.input.letter.toLowerCase()){
	  		 		$scope.input.letter = '';
	  		 		
	  		 		return;
	  		 }
	  	}

	  	var correctFlag = false;
	  	// checking if input letter is in selected random word
	  	for (var i = 0; i < selectedWord.length; i++) {
	  		if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
	  				$scope.displaywords = $scope.displaywords.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displaywords.slice(i+1);
	  				correctFlag = true;
	  		} 
	  	}
	  	if(correctFlag){
	  		$scope.correctGuesses.push($scope.input.letter.toLowerCase());
	  	}
	  	else{
	  		$scope.guesses--;
	  		$scope.incorrectGuesses.push($scope.input.letter.toLowerCase());
	  	}
	  	$scope.input.letter='';
	  	if($scope.guesses==0){
	  		alert("You Lost");
	  		newgame();
	  	}
	  	if($scope.displaywords.indexOf("*") == -1){
	  		alert('You Won');
	  		newgame();
	  	}

	  }


	  newgame();



}]);
 