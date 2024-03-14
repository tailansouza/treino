let numeroSorteado = 0
let imgDado =document.querySelector('#imgDado')
let btnSortear =document.querySelector('#btnSortear')
let sorteado =document.querySelector('#sorteado')
let somDado = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click',function(){
    //animacao
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')
    //som
    somDado.play()

    btnSortear.style.display = 'none'

    //setTimeout tempo para esecusao

    setTimeout(function(){
        //armasena sorteado
        numeroSorteado = getRandomInt(1,6)

        //muda a imagem pelo src

        imgDado.setAttribute('src' , './img/'+numeroSorteado+'.png')

        //exibe botao sortear 
        sorteado.textContent = numeroSorteado

        btnSortear.style.display = 'inline-block'

        //retira a animacao
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')

    },1000)
})

//fucao que jera numero inteiro
//incluindo min e max

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}