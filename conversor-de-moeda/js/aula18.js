/*Selecao dos elementos*/

let valorDigitado = document.querySelector('#valorEmReal')

//cria um array dos inputs radios
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

//seleciona botoes de acao
let btnConverter = document.querySelector('#btnConverter')

let btnLimpar = document.querySelector('#btnLimpar')

//cotacao do dia 18/03/2024

let valorDoDolar = 5.31
let valorDoEuro = 6.23 
let valorDaLibra = 7.26
let  valorDoBitcoin = 229762.85
let valorEmReal = 0 

let moedaEstrangeira = ''
let moedaConvertida = 0.00


//mensagen para esibir valores formatados
function mensagemFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("moeda covertida"+ moedaConvertida)
    aviso.textContent = "O valor "+ (valorEmReal).toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})+"convertido em  "+moedaEstrangeira + ' é '+moedaConvertida
}

/*Verificar se foi digitado augum numero para comverter*/
function bloquearBotao(){
    if(valorDigitado.value==0 || valorDigitado ==''|| valorDigitado == null){
btnConverter.setAttribute('disabled','disabled')
btnConverter.style.background =' #ccc'
btnConverter.style.cursor = 'not-allowed'
    }
}

//reativar botao
function ativarBotao(){
    if(valorDigitado.value > 0){
        btnConverter.removeAttribute('disabled','disabled')
        btnConverter.style.background = '#ccc107'
        btnConverter.style.cursor='pointer'
    }
}


//verificar qual botao radia esta marcado
btnConverter.addEventListener('click',function(){
    valorEmReal = parseFloat(valorDigitado.value)

console.log('Escolheu a moeda estrageira')
for(let i = 0;i < moedaSelecionada.length;i++){
    if(moedaSelecionada[i].checked){
        moedaEstrangeira = moedaSelecionada[i].value
        console.log(moedaEstrangeira)
        break;
    }
}
switch(moedaEstrangeira) {
        
    case 'Dólar':
        moedaConvertida = valorEmReal / valorDoDolar
        mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    break

    case 'Euro':
        moedaConvertida = valorEmReal / valorDoEuro
        mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
    break

    case 'Libra':
        moedaConvertida = valorEmReal / valorDaLibra
        mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
    break

    case 'Bitcoins':
        moedaConvertida = valorEmReal / valorDoBitcoin
        mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
    break

    default:
        aviso.textContent = 'Escolha uma moeda estrangeira'
}
isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})
btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
    
})
