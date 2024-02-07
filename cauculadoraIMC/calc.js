
const calcular = document.getElementById('calcular');


function imc (){
const idNome = document.getElementById('id-nome').value;
const idAltura= document.getElementById('id-altura').value;
const idPeso = document.getElementById('id-peso').value;
const idResutado = document.getElementById('id-resutado');
let valor = (idPeso/(idAltura*idAltura)).toFixed(2);
let classificacao = "";



if(idNome.value !==""  && idAltura!==""  && idPeso!==""){

    if(valor < 18.5){
        classificacao = 'abaixo do peso.'
    }else if(valor<25){
        classificacao = 'ideal parabens'
    }else if (valor<30){
        classificacao = 'levemente acima do peso'
    }else if (valor>30){
        classificacao = 'acima do peso'
    }

    idResutado.textContent = `${idNome} seu IMC é ${valor} e você esta ${classificacao}`;

}
else{
   idResutado.textContent = 'Preencha todos os campos!!'
}


}

calcular.addEventListener('click',imc);

