const skylineDropboxEl = document.getElementById("skyline-selection");
const natureDropboxEl = document.getElementById("nature-selection");
const monumentDropboxEl = document.getElementById("monument-selection");
const skylineImgEl = document.getElementById("skyline-img");
const natureImgEl = document.getElementById("nature-img");
const monumentImgEl = document.getElementById("monument-img");
const sloganInputEl = document.getElementById("slogan-input");
const sloganButtonEl = document.getElementById("slogan-button");
const sloganListEl = document.getElementById("slogans");

let slogans = [];


skylineDropboxEl.addEventListener('change', () => {
    const choice = skylineDropboxEl.value;
    skylineImgEl.src = `assets/${choice}.png`;
})

natureDropboxEl.addEventListener('change', () => {
    const choice = natureDropboxEl.value;
    natureImgEl.src = `assets/${choice}.png`;
})

monumentDropboxEl.addEventListener('change', () => {
    const choice = monumentDropboxEl.value;
    monumentImgEl.src = `assets/${choice}.png`;
})

sloganButtonEl.addEventListener('click', () => {
    const sloganValue = sloganInputEl.value;
    slogans.push(sloganValue);
    sloganListEl.textContent = "";
    for (let slogan of slogans) {
        const sloganListItemEl = document.createElement('li');
        sloganListItemEl.textContent = slogan;
        sloganListEl.appendChild(sloganListItemEl);
    }


})
