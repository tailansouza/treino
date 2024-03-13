let formulario = document.querySelector('form')
//dados de entrada
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#imc')

//dados de saida

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')
//botoes
let btnEmviar=document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEmviar.addEventListener('click',function (e){
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso/(altura*altura)).toFixed(1)
    

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value =imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit


//obijeto pessoa
let pessoa = {
    nome : nome,
    idade : idade,
    peso : peso,
    altura : altura,
    imc : imc,
    sit : sit,
}

console.log(pessoa)
dados[1].textContent = pessoa.nome
dados[2].textContent = pessoa.idade + 'anos'
dados[3].textContent = pessoa.peso + 'kl'
dados[4].textContent = pessoa.altura + 'm'
dados[5].textContent = pessoa.imc +''+ pessoa.sit


e.preventDefault()

})
function situacaoDoPeso(imc){
    let situacao =''
    if (imc < 18.5){
        situacao = 'baixo peso'
    }else if(imc >=18.6 && imc <=24.9){situacao='peso normal'}

    else if(imc >=25 && imc <=29.9){situacao='sobre peso '}

    else if(imc >=30 && imc <=34.9){situacao='sobre peso 1'}

    else if(imc >=35 && imc <=39.9){situacao='sobre peso 2'}

    else if(imc >=40){situacao='sobre peso 3'}

    else{"imforme seus dados coretamente"}
    return situacao
    

}