document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById('btn-menu');
    const btnMenuMobile = document.getElementById('btn-menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');

    btnMenu.addEventListener('click', function() {
        overlayMenu.classList.toggle('ativo');
        menuMobile.classList.toggle('ativo');
    });

    btnMenuMobile.addEventListener('click', function() {
        overlayMenu.classList.toggle('ativo');
        menuMobile.classList.toggle('ativo');
    });

    btnFechar.addEventListener('click', function() {
        overlayMenu.classList.remove('ativo');
        menuMobile.classList.remove('ativo');
    });
});
