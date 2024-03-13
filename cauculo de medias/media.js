let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCaucular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao =document.querySelector('#situacao')

function caucularMedia(n1,n2){
    return ( n1 + n2 ) / 2

}
function situacaoFinal(mediaFinal){
    let situacaoFinal = ''
    if (mediaFinal>=7){
        situacaoFinal = 'Aprovado'
    }else if (situacaoFinal<=3){
        situacaoFinal='Reprovado'
    }else{
        situacaoFinal='Voce esta de recuperaçao'
    }
    return situacaoFinal
}
function formatarSituacao(situacaoFinal){
    console.log('situasao final'+situacaoFinal)
    switch(situacaoFinal){
      
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break
            case 'Reprovado':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break
            case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.add('recupperacao')
            console.log('adicionar class recuperasao')
            break
            default : console.log('Situaçao indefinida')


    }
}


function validarNumero(numero){
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10  ){
        formulario.reset()
        aviso.textContent = 'digite uma nota emtre 0.1 e 10.0'
        aviso.classList.add('alerta')

        setTimeout(function(){
            aviso.textContent=''
            aviso.classList.remove('alerta')
        },2000);
    }
}

btnCaucular.addEventListener('click',function (e) {
console.log('caucular media')

let nota1 = parseFloat(cxNota1.value)
let nota2 = parseFloat(cxNota2.value)
let media = caucularMedia(nota1,nota2)

console.log(nota1)
console.log(nota2)
console.log(media)

if(isNaN(media)||media<0){
    console.log('nao e um numero')
    cxSituacao.value = ''
    }else{
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
e.preventDefault()

})
btnLimpar.addEventListener('click',function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})