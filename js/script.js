
let menunavburgercontainer = document.getElementsByClassName('menunavburgercontainer');
let menuburgericon = document.getElementsByClassName('menuburger');
let menuburgercontainer = document.getElementsByClassName('menuburgercontainer');

function togglenavburger(){
    menunavburgercontainer[0].classList.toggle("hidden");
}

document.getElementsByClassName('menuburgercontainer')[0].addEventListener("click", togglenavburger)   


document.getElementsByClassName('closeburgernav')[0].addEventListener("click", togglenavburger) 