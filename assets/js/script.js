var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list-items");
var bottomControl = document.querySelectorAll(".bottom-control");

var positionLeft = 0;
var percent = 100;
var listLength = listItems.length;

function slideList(positionLeft) {
  list.style.left = positionLeft + "%";

  if (positionLeft === -(percent * (listLength - 1))) {
    next.classList.add("active");
  } else {
    next.classList.remove("active");
  }

  if (positionLeft === 0) {
    prev.classList.add("active");
  } else {
    prev.classList.remove("active");
  }
}
slideList(positionLeft);

// top control functionality

next.addEventListener("click", function () {
  positionLeft = positionLeft - percent;
  slideList(positionLeft);
});

prev.addEventListener("click", function () {
  positionLeft = positionLeft + percent;
  slideList(positionLeft);
});

// bottom control functionality

bottomControl.forEach(function (Control, index) {
  Control.addEventListener("click", function () {
    positionLeft = -(percent * index);
    slideList(positionLeft);
  });
});