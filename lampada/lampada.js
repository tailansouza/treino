const onOff = document.getElementById("onoff");
const lamp = document.getElementById("lamp");



function aLampadaEsta(){
    return lamp.src.indexOf ('quebrada') > -1
};

function lampOff(){
    if(!aLampadaEsta()){
    lamp.src='./img/desligada.jpg';
 } 
};
function lampOn(){
    if(!aLampadaEsta()){
 lamp.src='./img/ligada.jpg';
 }
 };
function lampQuebrada(){
    if(!aLampadaEsta()){
    lamp.src='./img/quebrada.jpg'
} 
}
function lampOnoff(){
    if (onOff.textContent == 'ligar'){
        lampOn();
        onOff.textContent  = 'Desligar';
    }else if(onOff.textContent==='Desligar'){
        lampOff();
        onOff.textContent = 'ligar';
    }else if(!aLampadaEsta()){
        lamp.src='./img/quebrada.jpg'

    }
}



onOff.addEventListener('click',lampOnoff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampQuebrada);