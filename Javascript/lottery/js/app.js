// app.js

function getResult(){

	
	var congratulations = 'Congratulations! You gassed the number! Number was', lose = 'Sorry, try again! Number was';

	var userValues = [], result = [];
	var txt = ' ', resultText = '';

	var yes=0;

	var select = document.getElementsByTagName('select');

	for(var i=0; i<select.length; i++){

		result[i] = Math.floor(Math.random() * 10);

		var e = select[i];

		userValues[i] = e.options[e.selectedIndex].value;

		if (userValues[i]==result[i]){
			yes++;
			
		}
			txt  = txt.concat(" ",result[i].toString());

	}

	if (yes!=0) {

		resultText = congratulations + ' ' + txt;

	}
	else {
		resultText = lose + ' ' + txt;

	}

document.getElementById('lotteryResult').innerHTML = resultText;

}