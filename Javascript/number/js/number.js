// number.js


function checkInfinity(){
	var infinityValue = document.getElementById('infinityValue').value;

	var txt = '', answer= ''; var x;
	console.log(isNaN(infinityValue));


	if(isNaN(infinityValue)) {
		
		answer = 'Value is NAN';

	}			
	else {

		while(infinityValue!= Infinity) {
			infinityValue = infinityValue * infinityValue;
			txt = txt + ' ' + infinityValue + "<br>";
			answer = txt; }

		}

		document.getElementById('demo').innerHTML = answer;

	}
