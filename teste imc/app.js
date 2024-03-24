//pucha dados
let peso = document.querySelector('#id-peso')
let altura = document.querySelector('#id-altura')
 
//pucha botoes

let btnCalcular = document.querySelector('.btnCalcular');
let btnLimpar = document.querySelector('.btnLimpar');

//pucha resutados
let valor='';

let aviso = document.querySelector('.resutado');
//conversao por garantia



function calcular(){  

peso = parseFloat(peso.value)
altura = parseFloat(altura.value)

    valor = peso / (altura*altura)
   

return  aviso.textContent ='seu imc : '+ valor.toFixed(2);

}
function limparCampo(){
    valor='';
       aviso.textContent = '';
      peso="";
      altura="";
}

btnCalcular.addEventListener('click', calcular);

btnLimpar.addEventListener('click',limparCampo);

