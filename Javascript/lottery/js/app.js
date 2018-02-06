// app.js

function getResult(){

var random = Math.floor(Math.random() * 10);
var congratulations = 'Congratulations! You gassed the number! Number was';
var lose = 'Sorry, try again! Number was';
var message ='';
var userValues = []; var txt = ' '; var resultText = '';

var result = [];

var select = document.getElementsByTagName('select');

 for(var i=0; i<3; i++){

 	result[i] = Math.floor(Math.random() * 10);
 	
 	var e = select[i];
 	
 	userValues[i] = e.options[e.selectedIndex].value;
 	
 	if(userValues[i]==result[i]){
 		alert('1 gassed number');

	txt  = txt.concat(" ", result[i].toString());
	resultText = congratulations + ' ' + txt;

}
else {
	
	txt  = txt.concat(" ",result[i].toString());
	resultText = lose + ' ' + txt;
}

 }

/*



*/


document.getElementById('lotteryResult').innerHTML = resultText;



}