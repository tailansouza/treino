//play-----pause
const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo= document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');
const botaoAvançar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');

const numeroDeCapitulos = 10;

let capituloAtual = 1;

let taTocando = 0;

function tocarFaixa(){
   
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle')
    taTocando = 1;
}
function pausarFaixa(){
   
    audioCapitulo.pause() 
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
    taTocando = 0;
}
function tocarOuPausar(){
    if( taTocando === 0){
        tocarFaixa();
    }else{
        pausarFaixa();
    }
}
function trocarNome(){
    nomeCapitulo.innerText = 'capitulo ' + capituloAtual;
}

function proximaFaixa() {
    if(capituloAtual === numeroDeCapitulos){
        capituloAtual = 1;
    }else{
      capituloAtual = capituloAtual + 1   
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa()
    taTocando = 1
    trocarNome()

}
function voltarFaixa() {
    if(capituloAtual === 1){
        capituloAtual = numeroDeCapitulos;
    }else{
      capituloAtual = capituloAtual - 1   
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa()
    taTocando = 1
    trocarNome()

}
botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoAvançar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click',voltarFaixa);

