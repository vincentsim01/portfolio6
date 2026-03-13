function toggleSegment(segmentId) {
    const segment = document.getElementById(`${segmentId}-content`);
    segment.classList.toggle("hidden");
  }


  const animatedImage = document.getElementById('lifesummary');



// Final position (center of viewport)
const finalX = window.innerWidth / 2 - 50;
const finalY = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialX = -450;
const initialY = 0;

// Animation parameters
const startScroll = 300;
const endScroll = 450;

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



const animatedImageskill = document.getElementsByClassName('galleryinsidecontainer');



// Final position (center of viewport)
const finalXskill = window.innerWidth / 2 - 50;
const finalYskill = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialXskill = -550;
const initialYskill = 0;

// Animation parameters
const startScrollskill = 50;
const endScrollskill = 300;

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
    document.body.classList.toggle('dark');
    document.getElementsByClassName('theheader')[0].classList.toggle('dark');
    document.querySelector('footer').classList.toggle('white');
    document.getElementsByClassName('aboutintro')[0].classList.toggle('darkwhite');
}

const modalsegmenttextcontainer = document.getElementById('aboutsegmenttextcontainer')
// const educationcontent = document.getElementById('education-content2')
const modaloverlayeducation = document.getElementById('modaloverlayeducation');
const modaloverlayexperience = document.getElementById('modaloverlayexperience');
const modaloverlaylife = document.getElementById('modaloverlaylife');
const modaleducation = document.getElementById('education-content2');
const modalexperience = document.getElementById('experience-content2');
const modallife = document.getElementById('life-content2');

function showsegmenttexteducation(){
    // modalsegmenttextcontainer.classList.toggle('hidden');
    const textcontent = document.getElementById(`education-content2`)
    textcontent.classList.toggle('hidden');
    modaloverlayeducation.classList.toggle('hidden');
}

function showsegmenttextexperience(){
    // modalsegmenttextcontainer.classList.toggle('hidden');
    const textcontent = document.getElementById(`experience-content2`)
    textcontent.classList.toggle('hidden');
    modaloverlayexperience.classList.toggle('hidden');
}

function showsegmenttextlife(){
    // modalsegmenttextcontainer.classList.toggle('hidden');
    const textcontent = document.getElementById(`life-content2`)
    textcontent.classList.toggle('hidden');
    modaloverlaylife.classList.toggle('hidden');
}


modaloverlayeducation.addEventListener("click", function(event){
    if(!modaleducation.contains(event.target)){
        modaleducation.classList.add('hidden');
        modaloverlayeducation.classList.add('hidden');
    }
})

modaloverlayexperience.addEventListener("click", function(event){
    if(!modalexperience.contains(event.target)){
        modalexperience.classList.add('hidden');
        modaloverlayexperience.classList.add('hidden');
    }
})

modaloverlaylife.addEventListener("click", function(event){
    if(!modallife.contains(event.target)){
        modallife.classList.add('hidden');
        modaloverlaylife.classList.add('hidden');
    }
})


