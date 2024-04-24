"Use Strict"

// DOM Declarations 

const openMenuButtonEl = document.getElementById("open-menu");
const closeMenuButtonEl = document.getElementById("close-menu");


    // Event Listener for Menu toggle 
openMenuButtonEl.addEventListener('click', ToggleMenu);
closeMenuButtonEl.addEventListener('click', ToggleMenu);

function ToggleMenu () {
    let navMenuEl = document.getElementById("nav-menu");
    let style = window.getComputedStyle(navMenuEl);
    
    if(style.display === "none" ) {
        navMenuEl.style.display = 'block';

    } else {
        navMenuEl.style.display ='none';
    }
 };

