let numeroSeceto = 0
//numero de chances

let contador =1
let min = 1
let max = 10
let situacao = ''

//selecionar elementos

let inputNumero= document.querySelector('#inputNumero')
let btnChutar = document.querySelector('#btnChutar')
let aviso = document.querySelector('#aviso')
let musica = document.querySelector('#musicaDeFundo')

//controle do jogo

function gerarNumeroSecreto(){
    numeroSeceto = Math.floor(Math.random()*(max - min +1)) + min
}

function bloquearBtnChutar(){
    btnChutar.setAttribute('disable', 'disable')
    btnChutar.style.background = '#ccc'
    btnChutar.style.cursor = 'not-allowed'
}

function ativarBtnChutar(){
btnChutar.removeAttribute('disable')
btnChutar.style.background = '#222'
btnChutar.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero){
    if(numero <= 0 || numero > 10){
    console.log('tentativa invalida')
    aviso.classList.add ('errou')
    mensagemRapida('Digite numeros emtre 1 e 10 !!!')
    bloquearBtnChutar()
    inputNumero.value = ''
    }else{
        console.log('Numeros validos')
    }
}

//manipulando musica

function tocarMusicaDeFundo(){
    musica.play()
}
function ativarDesativarMusica(){
    if(musica.muted){
        musica.muted = false
    }else{
        musica.muted=true
    }
}
function pausarMusicaDeFundo(){
    musica.pause()
    musica.currentTime = 0
}
function jogar(){
    console.log('jogando')
    verificarSeAcertou()
}
function mensagemRapida(mensagem){
    aviso.textContent = mensagem
    setTimeout(function(){
        aviso.textContent= ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value=''

    },2000)
}
function gameOver (situacao){
    switch (situacao){
        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('acertou o numero secreto'+numeroSeceto)
            break

        case 'Chute maior':
              mensagemRapida('o numero chutado e maior que o verdadeiro')
              aviso.classList.add('errou')
              break

        case 'Chute menor':
              mensagemRapida('numero menor que o verdadeiro')
              aviso.classList.add('errou')
              
              default :
              console.log('nao definido')
        
    }
}
function verificarSeAcertou(){
    chute = parseInt(document.querySelector('#inputNumero').value)

    console.log('n de chutes'+contador)
    console.log('chute'+chute)

    if(numeroSeceto === chute){
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto()
    }else if (chute > numeroSeceto){
        situacao = 'Chute maior'
        gameOver(situacao)
        gerarNumeroSecreto()
    }else if(chute < numeroSeceto){
        situacao = 'Chute menor'
        gameOver(situacao)
        gerarNumeroSecreto()
    }else{
        console.log('nao sei nem vi')
    }
}