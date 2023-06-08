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
