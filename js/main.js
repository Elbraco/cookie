let icon = document.querySelector('.icon')
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "bignav") {
      x.className += " responsive";
    } else {
      x.className = "bignav";
    }
  }

  icon.addEventListener('click', myFunction)