var billede = document.querySelector(".billede");
var originalStørrelse = getComputedStyle(billede).getPropertyValue("transform");

function forstør() {
  billede.style.transform = "scale(1.2)";
}

function nulstil() {
  billede.style.transform = originalStørrelse;
}

billede.addEventListener("mouseover", forstør);
billede.addEventListener("mouseout", nulstil);
