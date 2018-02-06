// string-methods.js

function showItem(){
				var txt = document.getElementById('txt').innerHTML;
				var x = document.getElementById('demo');
				x.innerHTML = txt;
			}

				// New code section

				function toLowwerCase(){
					var txt = document.getElementById('txt').innerHTML;
					var i =0, str = ' ', letter = '';


					var y = txt.toLowerCase();
					document.getElementById('toLowwerCase').innerHTML = y;

				}

				// New code section

				function findIndex(){
					var txt = document.getElementById('txt').innerHTML;

					var setIndex = document.getElementById('searchIndex').value;
					setIndex = setIndex.toUpperCase();

					var index;

					index = txt.indexOf(setIndex);	



					document.getElementById('index').innerHTML = index;

				}

				// New code section

				function sliceStr(){
					var slicedSRT;
					var txt = document.getElementById('txt').innerHTML;
					var start = document.getElementById('sliceStart').value;
					var end = document.getElementById('sliceEnd').value;


					if(start<0 || end > txt.length){
						document.getElementById('sliceResult').innerHTML = 'Wrong values were set in input! Please check!';

					}
					else {
						slicedSRT = txt.slice(start,end);
						document.getElementById('sliceResult').innerHTML = slicedSRT;
					}

				}

				// New code section

				function replaceText(){
					var str = '';
					var txt = document.getElementById('txt').innerHTML;
					var textForReplace = document.getElementById('textForReplace').value;
					var indexForReplace = document.getElementById('indexForReplace').value;

					if(indexForReplace>0 && indexForReplace < txt.length){
						str = txt.substr(indexForReplace);
						replaceResult = txt.replace(str, textForReplace);

						document.getElementById('replacedTextResult').innerHTML = replaceResult;
					}
					else {
						document.getElementById('replacedTextResult').innerHTML = 'Index cannot be less than 0 and greater then txt length! Place check the input!';
					}


				}
				// New code section

				function getCharAt(){
					var txt = document.getElementById('txt').innerHTML;
					var charAtValue = document.getElementById('charAtValue').value;
					var charIndexResult;

					if(charAtValue > 0 && charAtValue < txt.length){
						charIndexResult = txt.charAt(charAtValue);
						document.getElementById('charAtResult').innerHTML = charIndexResult;

					}
					else {
						document.getElementById('charAtResult').innerHTML = 'Index cannot be less than 0 and greater then txt length! Place check the input!';

					}



				}

				// New code section

				function getCharCode(){
					var txt = document.getElementById('txt').innerHTML;

					var charCodeAtResult, charCodeAtValue;
					charCodeAtValue = document.getElementById('charCodeAtValue').value;

					if(!wrongIndex(txt, charCodeAtValue)){
						charCodeAtResult = txt.charCodeAt(charCodeAtValue);
						document.getElementById('charCodeAtResult').innerHTML = charCodeAtResult;

					}
					else {
						document.getElementById('charCodeAtResult').innerHTML = message;

					}


				}

				function wrongIndex(txt, index){
					
					var length = txt.length;
					if(index<0 || index > length) {
						return true;
					}
					else {
						message = 'Index cannot be less than 0 and greater then txt length! Place check the input!';
					}
					
				}

