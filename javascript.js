/* document.write('file "new"');
document.getElementById('h').value='one';
window.h.value='tow';
window.font.innerHTML='this is javascrapt .';

document.getElementById('btn').innerHTML="logen";
*/

function print(tex){
	window.T.innerHTML= tex;
}
function bbtn(){
	num =parseInt(window.t.value);
	if(num == 1){
		window.btn2.style.background ="red";	
	}else if(num == 2){
		window.btn2.style.background ="blue";
	}else if (num == 3) {
		window.btn2.style.background ="green";
	}else{
		window.c.style.background ="green";
	}
	
}