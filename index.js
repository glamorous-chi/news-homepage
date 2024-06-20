// When someone clicks the Hamburger menu, if the menu
const nav = document.querySelector('.nav-list');
const navToggle = document.querySelector(".menu");
const overlay = document.getElementById('overlay');

// When someone clicks the Hamburger menu
navToggle.addEventListener('click', () => {
    const visiblity = nav.getAttribute("data-visible")
    // console.log(visiblity);

    // Check if the nav is open or closed
    if (visiblity === "false") {
        nav.setAttribute("data-visible", "true");
        overlay.style.display = 'block';
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        nav.setAttribute("data-visible", "false");
        overlay.style.display = 'none';
        navToggle.setAttribute("aria-expanded", false);
    }

})
overlay.addEventListener('click', function() {
    nav.setAttribute("data-visible", "false");
    overlay.style.display = 'none';
    navToggle.setAttribute("aria-expanded", false);
});