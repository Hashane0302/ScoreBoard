let lead = "";

//HomeScore Card

let homeCount = 0;
let HomecountEl = document.getElementById("homeScore");

window.onload = () => {
  const homeScore = localStorage.getItem("homeScore");
  if (homeScore) {
    homeCount = parseInt(homeScore);
    HomecountEl.textContent = homeCount;
  }

  const guestScore = localStorage.getItem("guestScore");
  if (guestScore) {
    guestCount = parseInt(guestScore);
    guesCountEl.textContent = guestCount;
  }

  lead = homeCount > guestCount ? "home" : "guest";
  switchBulb();
};

// function countOneA() {
//   homeCount += 1;
//   HomecountEl.textContent = homeCount;
//   lead = homeCount > guestCount ? "home" : "guest";
//   switchBulb();
//   console.log("Clicked");
// }

const countOneA = () => {
  homeCount += 1;
  HomecountEl.textContent = homeCount;
  if (homeCount > guestCount) {
    lead = "home";
  } else {
    lead = "guest";
  }
  switchBulb();
  localStorage.setItem("homeScore", homeCount.toString());
  console.log("clicked");
};

// function counttwoA() {
//   homeCount += 2;
//   HomecountEl.textContent = homeCount;
//   lead = homeCount > guestCount ? "home" : "guest";
//   switchBulb();
//   console.log("Clicked");
// }

const counttwoA = () => {
  homeCount += 2;
  HomecountEl.textContent = homeCount;
  if (homeCount > guestCount) {
    lead = "home";
  } else {
    lead = "guest";
  }
  switchBulb();
  localStorage.setItem("homeScore", homeCount.toString());
  console.log("Clicked");
};

// function countthreeA() {
//   homeCount += 3;
//   HomecountEl.textContent = homeCount;
//   lead = homeCount > guestCount ? "home" : "guest";
//   switchBulb();

//   console.log("Clicked");
// }

const countthreeA = () => {
  homeCount += 3;
  HomecountEl.textContent = homeCount;
  if (homeCount > guestCount) {
    lead = "home";
  } else {
    lead = "guest";
  }

  switchBulb();
  localStorage.setItem("homeScore", homeCount.toString());
  console.log("clicked");
};

// Guest Score Card

let guestCount = 0;
let guesCountEl = document.getElementById("guestScore");

const countOneB = () => {
  guestCount += 1;
  guesCountEl.textContent = guestCount;
  // lead = homeCount > guestCount ? "home" : "guest";
  if (homeCount > guestCount) {
    lead = "home";
  } else {
    lead = "guest";
  }
  switchBulb();
  localStorage.setItem("guestScore", guestCount.toString());
  console.log("Clicked");
};

// function counttwoB() {
//   guestCount += 2;
//   guesCountEl.textContent = guestCount;
//   lead = homeCount > guestCount ? "home" : "guest";
//   switchBulb();
//   console.log("Clicked");
// }

const counttwoB = () => {
  guestCount += 2;
  guesCountEl.textContent = guestCount;
  if (homeCount > guestCount) {
    lead = "home";
    s;
  } else {
    lead = "guest";
  }

  switchBulb();
  localStorage.setItem("guestScore", guestCount.toString());
  console.log("Clicked");
};

// function countthreeB() {
//   guestCount += 3;
//   guesCountEl.textContent = guestCount;
//   lead = homeCount > guestCount ? "home" : "guest";
//   switchBulb();
//   console.log("Clicked");
// }

const countthreeB = () => {
  guestCount += 3;
  guesCountEl.textContent = guestCount;
  if (homeCount > guestCount) {
    lead = "home";
  } else {
    lead = "guest";
  }
  switchBulb();
  localStorage.setItem("guestScore", guestCount.toString());
  console.log("clicked");
};

// reset btn

const resetBtn = () => {
  console.log("Clicked");
  guesCountEl.textContent = 0;
  guestCount = 0;
  HomecountEl.textContent = 0;
  homeCount = 0;
  localStorage.removeItem("homeScore");
  localStorage.removeItem("guestScore");
  document.getElementById("home").style.display = "none";
  document.getElementById("guest").style.display = "none";
};
// lead board

const switchBulb = () => {
  var homeEl = document.getElementById("home");
  var guestEl = document.getElementById("guest");
  console.log("bulb", lead);

  if (lead === "home") {
    homeEl.style.display = "block";
    guestEl.style.display = "none";
  } else {
    guestEl.style.display = "block";
    homeEl.style.display = "none";
  }
};
