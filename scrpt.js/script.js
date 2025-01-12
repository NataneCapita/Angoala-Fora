

//Seleciona todos os links da navegação

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {  
        const targetId = link.getAttribute('data-target'); // Pega o ID do alvo
        const targetContent = document.getElementById(targetId); // Encontra o conteúdo correspondente

        // Fecha todos os conteúdos
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });

        // Mostra o conteúdo correspondente
        targetContent.classList.add('active');
    });
});


