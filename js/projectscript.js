const modalOverlaysoftware = document.getElementById('modalOverlaysoftware');
const modalOverlaysoftwaremobile = document.getElementById('modalOverlaysoftwaremobile');
const modalOverlaymarketing = document.getElementById('modalOverlaymarketing');
const modalOverlayimage = document.getElementById('modalOverlayimage');
const modalContentSoftware = document.getElementById('softwareprojectcontenttext');
const modalContentSoftwaremobile = document.getElementById('softwareprojectcontenttextmobile');
const modalContentMarketing = document.getElementById('marketingprojectcontenttext');
const modalContentImage = document.getElementById('imageprojectcontenttext');
const modalinside = document.getElementsByClassName('projectcontenttext');

function togglecontenttext(param){
    let contentId = document.getElementById(`${param}projectcontenttextmb`);
    contentId.classList.toggle("hidden");
}

function togglecontenttext2software(){
    let contentId = document.getElementById(`softwareprojectcontenttext`);
    contentId.classList.toggle("hidden");
    // alert(`modalOverlay${param}`)
    modalOverlaysoftware.classList.toggle("hidden");
}

function togglecontenttext2softwaremobile(){
    let contentId = document.getElementById(`softwaremobileprojectcontenttext`);
    contentId.classList.toggle("hidden");
    // alert(`modalOverlay${param}`)
    modalOverlaysoftwaremobile.classList.toggle("hidden");
}

function togglecontenttext2marketing(){
    let contentId = document.getElementById(`marketingprojectcontenttext`);
    contentId.classList.toggle("hidden");
    // alert(`modalOverlay${param}`)
    modalOverlaymarketing.classList.toggle("hidden");
}

function togglecontenttext2image(){
    let contentId = document.getElementById(`imageprojectcontenttext`);
    contentId.classList.toggle("hidden");
    // alert(`modalOverlay${param}`)
    modalOverlayimage.classList.toggle("hidden");
}

// modalContentSoftware.addEventListener('click', function(event){
//     event.stopPropagation();
// })

modalOverlaysoftware.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!modalContentSoftware.contains(event.target)) {
        modalContentSoftware.classList.add('hidden');
        modalOverlaysoftware.classList.add('hidden');
    }

  });

  modalOverlaysoftwaremobile.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!modalContentSoftwaremobile.contains(event.target)) {
        modalContentSoftwaremobile.classList.add('hidden');
        modalOverlaysoftwaremobile.classList.add('hidden');
    }

  });

  modalOverlaymarketing.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!modalContentMarketing.contains(event.target)) {
        modalContentMarketing.classList.add('hidden');
        modalOverlaymarketing.classList.add('hidden');
    }

  });

  modalOverlayimage.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!modalContentImage.contains(event.target)) {
        modalContentImage.classList.add('hidden');
        modalOverlayimage.classList.add('hidden');
    }

  });




const animatedImage = document.getElementsByClassName('');



// Final position (center of viewport)
const finalX = window.innerWidth / 2 - 50;
const finalY = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialX = -450;
const initialY = 0;

// Animation parameters
const startScroll = 50;
const endScroll = 200;

function updateAnimation() {
    const scrollY = window.pageYOffset;

    
    // Final position: 50px from left, 1000px from top
    const finalX = 0;
    const finalY = 0;
    
    if (scrollY < startScroll) {
        // Before animation - hide image
        animatedImage[0].style.transform = `translate(${initialX}px, ${initialY}px)`;
    } else if (scrollY >= startScroll && scrollY <= endScroll) {
        // During animation - move image
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const currentX = initialX + (finalX - initialX) * progress;
        const currentY = initialY + (finalY - initialY) * progress;
        
        animatedImage[0].style.transform = `translate(${currentX}px, ${currentY}px)`;
    } else {
        // After animation - keep at final position (50px from left, 1000px from top)
        animatedImage[0].style.transform = `translate(${finalX}px, ${finalY}px)`;
    }
}

window.addEventListener('scroll', updateAnimation);
window.addEventListener('resize', updateAnimation);
updateAnimation();

const animatedImageskill = document.getElementsByClassName('timelinecontainer');



// Final position (center of viewport)
const finalXskill = window.innerWidth / 2 - 50;
const finalYskill = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialXskill = -550;
const initialYskill = 0;

// Animation parameters
const startScrollskill = 700;
const endScrollskill = 1100;

function updateAnimationskill() {
    const scrollYskill = window.pageYOffset;

    
    // Final position: 50px from left, 1000px from top
    const finalXskill = 0;
    const finalYskill = 0;
    
    if (scrollYskill < startScrollskill) {
        // Before animation - hide image
        animatedImageskill[0].style.transform = `translate(${initialXskill}px, ${initialYskill}px)`;
    } else if (scrollYskill >= startScrollskill && scrollYskill <= endScrollskill) {
        // During animation - move image
        const progressskill = (scrollYskill - startScrollskill) / (endScrollskill - startScrollskill);
        const currentXskill = initialXskill + (finalXskill - initialXskill) * progressskill;
        const currentYskill = initialYskill + (finalYskill - initialYskill) * progressskill;
        
        animatedImageskill[0].style.transform = `translate(${currentXskill}px, ${currentYskill}px)`;
    } else {
        // After animation - keep at final position (50px from left, 1000px from top)
        animatedImageskill[0].style.transform = `translate(${finalXskill}px, ${finalYskill}px)`;
    }
}

window.addEventListener('scroll', updateAnimationskill);
window.addEventListener('resize', updateAnimationskill);
updateAnimationskill();


function toggleDarkMode(){
    document.getElementsByClassName('theheader')[0].classList.toggle('dark');
    document.querySelector('footer').classList.toggle('white');
    document.body.classList.toggle('dark')
}

function showdetailproject(){
    document.getElementById('projectdetail').classList.toggle('hidden');
}


const footeryear = document.getElementById('footeryear');
footeryear.textContent = new Date().getFullYear();



// const projecttext = document.getElementById('projecttext');
// const projecttextburger = document.getElementById('projecttextburger');
// const detailproject = document.getElementById('detailproject');
// const detailprojectburger = document.getElementById('detailprojectburger');


// projecttext.addEventListener('mouseenter', function () {
//     alert('PROJECTS TEXT HOVERED')
//     detailproject.classList.remove('none');
// });

// projecttext.addEventListener('mouseleave', function () {
//     detailproject.classList.add('none');
// });

// document.addEventListener("DOMContentLoaded", function(){

// const projecttextburger = document.getElemen    tById('projecttext');
// const detailprojectburger = document.getElementById('detailprojectburger');

// projecttextburger.addEventListener('mouseenter', function () {
//     alert('PROJECTS TEXT HOVERED');
//     detailprojectburger.classList.remove('hidden');
// });

// projecttextburger.addEventListener('mouseleave', function () {
//     detailprojectburger.classList.add('hidden');
// });

// });