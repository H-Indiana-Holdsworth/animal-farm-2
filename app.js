// import functions and grab DOM elements
const horseImg = document.getElementById('horse-image');
const catImg = document.getElementById('cat-image');
const dogImg = document.getElementById('dog-image');

const horseAudio = document.getElementById('horse-audio');
const catAudio = document.getElementById('cat-audio');
const dogAudio = document.getElementById('dog-audio');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
horseImg.addEventListener('click', () => {
    horseAudio.play();    
});

catImg.addEventListener('click', () => {
    catAudio.play();
});

dogImg.addEventListener('click', () => {
    dogAudio.play();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'h'){
        horseAudio.play();}
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'd'){
        dogAudio.play();}
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'c'){
        catAudio.play();}
});