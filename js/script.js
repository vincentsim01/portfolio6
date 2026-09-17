
let menunavburgercontainer = document.getElementsByClassName('menunavburgercontainer');
let menuburgericon = document.getElementsByClassName('menuburger');
let menuburgercontainer = document.getElementsByClassName('menuburgercontainer');

function togglenavburger(){
    menunavburgercontainer[0].classList.toggle("hidden");
}

document.getElementsByClassName('menuburgercontainer')[0].addEventListener("click", togglenavburger)   


document.getElementsByClassName('closeburgernav')[0].addEventListener("click", togglenavburger) 


const footeryear = document.getElementById('footeryear');
if (footeryear) {
    footeryear.textContent = new Date().getFullYear();
}

const popupStyles = document.createElement('style');
popupStyles.textContent = `
    .site-promo-modal {
        position: fixed;
        inset: 0;
        z-index: 100;
        display: grid;
        place-items: center;
        padding: 1rem;
        background: rgb(17 24 39 / 68%);
        backdrop-filter: blur(5px);
    }

    .site-promo-modal.is-hidden {
        display: none;
    }

    .site-promo-content {
        position: relative;
        width: min(100%, 30rem);
        padding: 2.5rem 2rem 2rem;
        border: 1px solid rgb(255 255 255 / 35%);
        border-radius: 0.75rem;
        background: linear-gradient(145deg, #fffaf0, #ffffff);
        color: #1c1917;
        box-shadow: 0 24px 70px rgb(0 0 0 / 28%);
        text-align: center;
        animation: site-promo-enter 350ms ease-out both;
    }

    .site-promo-label {
        margin: 0 0 0.75rem;
        color: #b45309;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }

    .site-promo-content h2 {
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        font-size: clamp(1.5rem, 5vw, 2.2rem);
    }

    .site-promo-content p {
        margin: 0.8rem 0 1.5rem;
        color: #57534e;
        font-family: 'Noto Sans', sans-serif;
        line-height: 1.6;
    }

    .site-promo-close {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        width: 2rem;
        height: 2rem;
        border: 1px solid #d6d3d1;
        border-radius: 50%;
        background: #fff;
        color: #57534e;
        cursor: pointer;
        font-size: 1.1rem;
        line-height: 1;
    }

    .site-promo-close:hover {
        background: #292524;
        color: #fff;
    }

    @keyframes site-promo-enter {
        from { opacity: 0; transform: translateY(12px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
`;
document.head.appendChild(popupStyles);

document.body.insertAdjacentHTML('beforeend', `
    <div class="site-promo-modal is-hidden" id="site-promo-modal" role="dialog" aria-modal="true" aria-labelledby="site-promo-title">
        <div class="site-promo-content">
            <button class="site-promo-close" type="button" aria-label="Close promotion">&times;</button>
            <p class="site-promo-label">Limited-time offer</p>
            <h2 id="site-promo-title">Get 50% off your first project</h2>
            <p>Let us turn your next idea into a polished digital experience.</p>
        </div>
    </div>
`);

const sitePromoModal = document.getElementById('site-promo-modal');
const sitePromoContent = sitePromoModal.querySelector('.site-promo-content');

function closeSitePromo() {
    sitePromoModal.classList.add('is-hidden');
}

sitePromoModal.querySelector('.site-promo-close').addEventListener('click', closeSitePromo);
sitePromoModal.addEventListener('click', (event) => {
    if (!sitePromoContent.contains(event.target)) {
        closeSitePromo();
    }
});

setTimeout(() => {
    sitePromoModal.classList.remove('is-hidden');
}, 100);
