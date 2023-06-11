// /////////Tema 2///////
var billeder = document.querySelectorAll(".billede");

billeder.forEach(function (billede) {
  billede.addEventListener("mouseover", function () {
    forstør(billede);
  });

  billede.addEventListener("mouseout", function () {
    nulstil(billede);
  });
});

function forstør(element) {
  element.style.transform = "scale(1.2)";
}

function nulstil(element) {
  element.style.transform = "scale(1)";
}

// Tema 3////////
var billede_pitch = document.querySelectorAll(".billede_pitch");

billede_pitch.forEach(function (billede_pitch) {
  billede_pitch.addEventListener("mouseover", function () {
    forstør(billede_pitch);
  });

  billede_pitch.addEventListener("mouseout", function () {
    nulstil(billede_pitch);
  });
});

function forstør(element) {
  element.style.transform = "scale(1.2)";
}

function nulstil(element) {
  element.style.transform = "scale(1)";
}

// Billede 2/////////

var billede_3 = document.querySelector(".billede_3");

billede_3.addEventListener("mouseover", function () {
  ryst(billede_3);
});

billede_3.addEventListener("mouseout", function () {
  nulstil(billede_3);
});

function ryst(element) {
  element.style.transform = "rotate(5deg)";
  setTimeout(function () {
    element.style.transform = "rotate(-5deg)";
    setTimeout(function () {
      element.style.transform = "rotate(5deg)";
      setTimeout(function () {
        element.style.transform = "rotate(-5deg)";
        setTimeout(function () {
          element.style.transform = "rotate(0deg)";
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

function nulstil(element) {
  element.style.transform = "rotate(0deg)";
}
