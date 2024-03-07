window.addEventListener("scroll",function(){
    let header = document.querySelector('#efeito-menu')

    header.classList.toggle('rolagem',window.scrollY > 580)
})