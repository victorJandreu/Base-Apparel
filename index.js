var r = document.querySelector(':root');

function myFunction_get() {
  var rs = getComputedStyle(r)
}

const form = document.getElementById("form")
const email = document.getElementById("email")

form.addEventListener("submit", function(e){

    r.style.setProperty('--isBefore', 'hidden')
    r.style.setProperty("--colorChange", "hsl(0, 36%, 70%)")
 
    e.preventDefault()
   
    if(email.value.length === 0) {
        r.style.setProperty('--isBefore', 'visible')
        r.style.setProperty("--colorChange", "hsl(0, 93%, 68%)")
    }
    email.value  = ""
})