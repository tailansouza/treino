const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const tituloProduto = document.getElementById("titulo-produto");

const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

const miniaturaImagen0 =document.getElementById("0-imagem-miniatura");
const miniaturaImagen1 =document.getElementById("1-imagem-miniatura");
const miniaturaImagen2 =document.getElementById("2-imagem-miniatura");


const verdeCipreste= {
nome:'verde-cipreste',
pasta:'imagens-verde-cipreste'
}
  const azulInverno= {
    nome:'Azul-inverno',
    pasta:'imagens-azul-inverno'
    }
    const meiaNoite= {
        nome:'Meia-noite',
        pasta:'imagens-meia-noite'
        }
        const estelar= {
            nome:'Estelar',
            pasta:'imagens-estelar'
            }
            const rosaClaro= {
                nome:'Rosa-claro',
                pasta:'imagens-rosa-claro'
                }

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]
const opicaoTamanho = ['41 mm','45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src ='./imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg';
};

function trocarTamanho(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

  tituloProduto.innerText = " Pulseira loop esportiva "+opcoesCores[corSelecionada].nome +" para caixa de "+opicaoTamanho[tamanhoSelecionado];
   
       if(opicaoTamanho[tamanhoSelecionado] === '41 mm'){

           imagemVisualizacao.classList.add('caixa-pequena')
           }else{
             imagemVisualizacao.classList.remove('caixa-pequena') 
               }
};
function trocarCor(){
    //troca titulo
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;

    corSelecionada = idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText = " Pulseira loop esportiva "+opcoesCores[corSelecionada].nome +" para caixa de "+opicaoTamanho[tamanhoSelecionado];
    
    nomeCorSelecionada.innerText = "Cor - " +opcoesCores[corSelecionada].nome;

    //troca miniatura
  miniaturaImagen0.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
  miniaturaImagen1.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';  
  miniaturaImagen2.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
  //trocar imagen visualisaçao
  imagemVisualizacao.src ='./imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg';
}