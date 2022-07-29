const skylineDropboxEl = document.getElementById("skyline-selection");
const natureDropboxEl = document.getElementById("nature-selection");
const monumentDropboxEl = document.getElementById("monument-selection");
const skylineImgEl = document.getElementById("skyline-img");
const natureImgEl = document.getElementById("nature-img");
const monumentImgEl = document.getElementById("monument-img");
const sloganInputEl = document.getElementById("slogan-input");
const sloganButtonEl = document.getElementById("slogan-button");
const sloganListEl = document.getElementById("slogans");
const countersEl = document.getElementById("counters");

let slogans = [];
let skylineCounter = 0;
let natureCounter = 0;
let monumentCounter = 0;


skylineDropboxEl.addEventListener('change', () => {
    skylineCounter++;
    const choice = skylineDropboxEl.value;
    skylineImgEl.src = `assets/${choice}.png`;
    displayCountStats();
})

natureDropboxEl.addEventListener('change', () => {
    natureCounter++;
    const choice = natureDropboxEl.value;
    natureImgEl.src = `assets/${choice}.png`;
    displayCountStats();

    
})

monumentDropboxEl.addEventListener('change', () => {
    monumentCounter++;
    const choice = monumentDropboxEl.value;
    monumentImgEl.src = `assets/${choice}.png`;
    displayCountStats();

})

sloganButtonEl.addEventListener('click', () => {
    const sloganValue = sloganInputEl.value;
    slogans.push(sloganValue);
    displayCatchphrases();
})

function displayCountStats() {
    countersEl.textContent = `You changed Skyline ${skylineCounter} times, Nature ${natureCounter} times, and Monuments ${monumentCounter} times.`
}

function displayCatchphrases() {
    sloganListEl.textContent = "";
    sloganInputEl.value = "";
    for (let slogan of slogans) {
        const sloganListItemEl = document.createElement('li');
        sloganListItemEl.textContent = slogan;
        sloganListEl.appendChild(sloganListItemEl);
    }
}
