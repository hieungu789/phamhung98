$('.hamberger').click(function () {
    let menu = document.getElementById('menu-right')
    menu.classList.toggle('hide')
});

window.addEventListener('scroll', function () {
    let scrollNav = document.querySelector(".nav-bar")
    scrollNav.classList.toggle("scroll", window.scrollY > 0);
})
$('.dropdonw-Menu_Car-title').click(function () {
    let menu = document.getElementById('dropdonw-Menu')
    menu.classList.toggle('show')
})
$('.hamberger-menu').click(function () {
    let menu = document.getElementById('menu-drift_away')
    menu.classList.toggle('show')
});
$('.dropdonw-Menu_Car-title-a').click(function () {
    let menu = document.getElementById('dropdonw-persistent')
    menu.classList.toggle('show')
})

const modal = document.getElementById('Modal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display ="block"
}
span.onclick = function () {
    modal.style.display ="none"
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    
}
