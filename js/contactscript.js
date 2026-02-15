const animatedImage = document.getElementById('contactformsection');



// Final position (center of viewport)
const finalX = window.innerWidth / 2 - 50;
const finalY = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialX = -450;
const initialY = 0;

// Animation parameters
const startScroll = 100;
const endScroll = 300;

function updateAnimation() {
    const scrollY = window.pageYOffset;

    
    // Final position: 50px from left, 1000px from top
    const finalX = 0;
    const finalY = 0;
    
    if (scrollY < startScroll) {
        // Before animation - hide image
        animatedImage.style.transform = `translate(${initialX}px, ${initialY}px)`;
    } else if (scrollY >= startScroll && scrollY <= endScroll) {
        // During animation - move image
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const currentX = initialX + (finalX - initialX) * progress;
        const currentY = initialY + (finalY - initialY) * progress;
        
        animatedImage.style.transform = `translate(${currentX}px, ${currentY}px)`;
    } else {
        // After animation - keep at final position (50px from left, 1000px from top)
        animatedImage.style.transform = `translate(${finalX}px, ${finalY}px)`;
    }
}

window.addEventListener('scroll', updateAnimation);
window.addEventListener('resize', updateAnimation);
updateAnimation();



const animatedImageskill = document.getElementsByClassName('mapcontainer');



// Final position (center of viewport)
const finalXskill = window.innerWidth / 2 - 50;
const finalYskill = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialXskill = -550;
const initialYskill = 0;

// Animation parameters
const startScrollskill = 600;
const endScrollskill = 1000;

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