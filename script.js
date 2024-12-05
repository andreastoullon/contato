function startAnimation() {
    const kikandoElement = document.querySelector('.kikando');
    // Adiciona a animação de kikando
    kikandoElement.style.animation = 'kikandoAnimation 1s ease infinite';
    
    // Para parar a animação após algum tempo (opcional)
    setTimeout(() => {
        kikandoElement.style.animation = '';
    }, 5000); // A animação dura 5 segundos antes de parar
}

const botao = document.getElementsByClassName('enviar')[0]; 

function btn(click){
    if(click){
        console.log("hello world")
    }else{
        console.trace();
    }
}


botao.addEventListener('click', function(){
    alert('Enviado');
});


