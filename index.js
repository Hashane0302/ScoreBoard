

let lead = "" 

//HomeScore Card 



let homeCount = 0 
let HomecountEl = document.getElementById("homeScore")


function countOneA() {
    homeCount += 1 
    HomecountEl.textContent = homeCount
    lead = homeCount > guestCount ? "home" : "guest"
    switchBulb ()
    console.log("Clicked")
}

function counttwoA() {
    homeCount += 2 
    HomecountEl.textContent = homeCount
    lead = homeCount > guestCount ? "home" : "guest"
    switchBulb ()
    console.log("Clicked")
}


function countthreeA() {
    homeCount += 3 
    HomecountEl.textContent = homeCount
    lead = homeCount > guestCount ? "home" : "guest"
    switchBulb ()


    console.log("Clicked")
}



// Guest Score Card 

let guestCount = 0 
let guesCountEl = document.getElementById("guestScore")

function countOneB() {
    guestCount += 1 
   guesCountEl.textContent = guestCount
   lead = homeCount > guestCount ? "home" : "guest"
   switchBulb ()
    console.log("Clicked")
}

function counttwoB() {
    guestCount += 2 
    guesCountEl.textContent = guestCount
    lead = homeCount > guestCount ? "home" : "guest"
    switchBulb ()
    console.log("Clicked")
}


function countthreeB() {
    guestCount += 3 
    guesCountEl.textContent = guestCount
    lead = homeCount > guestCount ? "home" : "guest"
    switchBulb ()
    console.log("Clicked")
}


// reset btn

 function resetBtn() {
     console.log("Clicked")
     guesCountEl.textContent = 0
     guestCount = 0
     HomecountEl.textContent = 0
     homeCount = 0 
 }
 
 // lead board 
 

    function switchBulb () {
        var homeEl = document.getElementById("home")
        var guestEl = document.getElementById("guest")
        console.log("bulb",lead)

        if (lead === "home") {
            homeEl.style.display = "block"
            guestEl.style.display = "none"
        } else {
            guestEl.style.display = "block"
            homeEl.style.display = "none"
        }
    }