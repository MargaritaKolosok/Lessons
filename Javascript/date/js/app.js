// app.js
window.onload = function () {

	var dataStr = new Date();
	document.getElementById("demo").innerHTML = dataStr.toDateString();	

}


function getDay(){
	var txt = '';
	var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		function checkDate(date){
		if(date=='Invalid Date'){
			
			txt = 'Wrong date format! Check input and try again!';
			
			return true;
		}
	}

	var date = document.getElementById("day").value;
	date = new Date(date);

	if(!checkDate(date)){

		var day= date.getDay();
		txt = weekDay[day];

	}

	document.getElementById('dayResult').innerHTML = txt;

}




