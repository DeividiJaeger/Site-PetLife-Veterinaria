var elementosSectionDuvida = document.querySelectorAll('.duvida')

//Função que vai ser executada uma vez para cada elemento
elementosSectionDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa');
    })
})