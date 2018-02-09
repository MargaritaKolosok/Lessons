// app.js
/*

// Dot moving Interval

window.onload = function(){
			var demo = document.getElementById('demo');
			var spanArray='';
			for(var i=0; i<5; i++){

				spanArray+= '<span>' + i + '</span>';
			}
			demo.innerHTML = spanArray;

		}

		var i=0;

		var myTimer = setInterval(moveDot, 1000);
		var arrSpan = demo.childNodes;

		function moveDot(){
			if(i!=arrSpan.length){

				arrSpan[i].classList.toggle('dot');

				console.log(i + 'if');

				i++;

			}
			else {
				i=0;
				console.log(i + 'else');
			} 

		}


*/

var node = document.getElementById('demo').childNodes;
		var startPos = node[0].classList.add('dot');

		
		function moveRight(){
			if(i==node.length-1){
				node[i].classList.remove('dot');

				i=0;
				node[i].classList.add('dot');
				
			}
			else {

				i++;
				
				node[i].classList.add('dot');
				node[i-1].classList.remove('dot');
			} 

			
		}

		function moveLeft(){
			if(i==0){
				
				node[i].classList.remove('dot');
				i=node.length -1;
				node[i].classList.add('dot');

			}
			else {
				node[i].classList.remove('dot');
				i--;
				node[i].classList.add('dot');
				
				console.log('ELSE' + i);

			}
			
		}
