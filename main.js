
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.getElementById("menu").style.display = "flex"
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById("menu").style.display = "none"
    }
})