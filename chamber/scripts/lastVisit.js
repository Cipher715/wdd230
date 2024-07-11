const lastVisit = document.querySelector('.lastVisit');
const msToDays = 86400000;
const today = Date.now();
const lastVisited = window.localStorage.getItem("lastVisited-ls") || 0;

const daysPassed = (today - lastVisited)/msToDays;
const msPassed  = today - lastVisited;

if (lastVisited != 0) {
    if (msPassed < msToDays){
        lastVisit.textContent = 'Back so soon! Awesome!'
    } else if (msPassed >= msToDays && today - msPassed < 2*msToDays) {
        lastVisit.textContent = 'You last visited 1 day ago.'
    } else {
        lastVisit.textContent = `You last visited ${daysPassed.toFixed(0)} days ago.`
    }
} else {
    lastVisit.textContent = 'Welcome! Let us know if you have any questions.'
}

localStorage.setItem("lastVisited-ls", today);