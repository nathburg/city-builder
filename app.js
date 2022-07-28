const skylineDropboxEl = document.getElementById("skyline-selection");
const natureDropboxEl = document.getElementById("nature-selection");
const monumentDropboxEl = document.getElementById("monument-selection");
const skylineImgEl = document.getElementById("skyline-img");
const natureImgEl = document.getElementById("nature-img");
const monumentImgEl = document.getElementById("monument-img");


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
