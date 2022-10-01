/*Calculadora */
var obj_txt_ladoa = window.document.getElementById('txtladoa')
var obj_txt_ladob = window.document.getElementById('txtladob')
var obj_txt_ladoc = window.document.getElementById('txtladoc')
const obj_bt_limpar = document.querySelector('#bt_limpar')

//Função responsável por limpar os campos
obj_bt_limpar.addEventListener('click', FunLimpaDisplay)


//Função que calcula o resultado da conta	
function FunCalculaResultado(){

	var n1 = Number(obj_txt_ladoa.value)
	var n2 = Number(obj_txt_ladob.value)
	var n3 = Number(obj_txt_ladoc.value)
	//Se o campo 1 estiver vazio fazer a conta a seguir:
	 if(!n1){
		var conta1 = Math.sqrt(n2*n2 + n3*n3)
		window.alert('O resultado é ' + conta1)
		FunLimpaDisplay()
	 }
	 else
	 //Se o campo 2 estiver vazio fazer a conta a seguir:
	 if(!n2){
		var conta2 = Math.sqrt(n1*n1 - n3*n3)
		window.alert('O resultado é ' + conta2)
		FunLimpaDisplay()
	 }
	else
	//Se o campo 3 estiver vazio fazer a conta a seguir:
	if(!n3){
		var conta3 = Math.sqrt(n1*n1 - n2*n2)
		window.alert('O resultado é ' + conta3)
		FunLimpaDisplay()
	}
	//Permite apenas dois valores
	else{
		window.alert('Por favor, apenas dois números')
		FunLimpaDisplay()
	}

	
		
	}

function FunLimpaDisplay(){
	obj_txt_ladoa.value = ''
	obj_txt_ladob.value = ''
	obj_txt_ladoc.value = ''

	}	
	
