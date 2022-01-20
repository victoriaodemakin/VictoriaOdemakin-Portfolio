let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 90;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #64ffda ${progressValue * 3.6}deg,
      #020c1b ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
//second bar
let progressBar2 = document.querySelector(".team-2");
let valueContainer2 = document.querySelector(".team-container-2");

let progressValue2 = 0;
let progressEndValue2 = 80;
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #64ffda ${progressValue2 * 3.6}deg,
      #020c1b ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);
//third bar
let progressBar3 = document.querySelector(".circular-progress-3");
let valueContainer3 = document.querySelector(".value-container-3");

let progressValue3 = 0;
let progressEndValue3 = 75;
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue}%`;
  progressBar3.style.background = `conic-gradient(
      #64ffda ${progressValue3 * 3.6}deg,
      #020c1b ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);
//fourth bar
let progressBar4 = document.querySelector(".circular-progress-4");
let valueContainer4 = document.querySelector(".value-container-4");

let progressValue4 = 0;
let progressEndValue4 = 80;
let speed4 = 50;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
      #64ffda ${progressValue4 * 3.6}deg,
      #020c1b ${progressValue4 * 3.6}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);
