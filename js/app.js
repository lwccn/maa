const container = document.querySelector(".container")
const coffees = [
  { name: "01", image: "images/thumbs/01.jpg" },
  { name: "02", image: "images/thumbs/02.jpg" },
  { name: "03", image: "images/thumbs/03.jpg" },
  { name: "04", image: "images/thumbs/04.jpg" },
  { name: " 05", image: "images/thumbs/05.jpg" },
  { name: " 06", image: "mages/thumbs/06.jpg" },
  { name: "07", image: "mages/thumbs/07.jpg" },
  { name: "avatar", image: "mages/thumbs/avatar.jpg" },
  { name: "bg", image: "mages/thumbs/bg.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}