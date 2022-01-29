const navbar = document.querySelector('navbar') //Selecionando a navbar através do ID


//Adicionando um detector de eventos de scroll, toda vez que o usuário rolar pela página a função callback abaixo será executada
window.addEventListener('scroll', () => {
    const top = document.scrollingElement.scrollTop; //Essa propriedade retorna a distância que você está do topo da página, se retornar 0, significa que você está no topo 
    if(top !== 0){
        //Caso seja diferente de 0, altera o background-color da navbar para preto
        navbar.style.background = 'rgb(20, 20, 20)'
    }
    else{
        //Caso seja 0, significa que o usuário está no topo da página e devemos setar a cor para o preto com transparência novamente
        navbar.style.background = 'linear-gradient(rgb(20, 20, 20), rgba(0, 0, 0, 0.007))'
    }
})