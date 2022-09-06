function myFunction(y) {
    y.classList.toggle("fa-plus");
    var x = document.getElementById("welcomeDiv");
    if (x.style.display == "none") {
        x.style.display = 'block'
    }
    else {
        x.style.display = "none";
    }
}

const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')
menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
})
