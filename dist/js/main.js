// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

// Get ALL the items in the navigation list
const navItem = document.querySelectorAll('.nav-item');

// Set initial state of menu
// open == true, closed == false
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {  // If the menu is not shown, show it
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {         // Else, hide it.
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}