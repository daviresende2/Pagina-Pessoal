    let btnMenu = document.getElementById('btn-menu');
    let menuMobile = document.getElementById('menu-mobile');
    let overlayMenu = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('abrir-menu');
        overlayMenu.classList.toggle('abrir-menu');
    });

    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.classList.remove('abrir-menu');
    });
