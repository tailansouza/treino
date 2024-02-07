const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let intervalId = null;
let colorIndex = 0;

const trafficLight = (event) => {
    stopAuto()
    on[event.target.id]();
   
}

const nextIndex =() => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

  //  if(colorIndex < 2){
  //     colorIndex++  
  //  }else{
  //      colorIndex = 0
   // }
   
}

const changeColor = () =>{
    const colors = ['red','yellow','green']
    const color =colors[colorIndex]
    on[color]();
    nextIndex();
}
const stopAuto = () => {
    clearInterval(intervalId);
}
const on = {
    'red':()=> img.src="./img/vermelho.png",

    'yellow':()=> img.src="./img/amarelo.png",

    'green':()=> img.src="./img/verde.png",

    'automatic':()=> intervalId = setInterval(changeColor , 1000)
        

}
buttons.addEventListener('click',trafficLight);