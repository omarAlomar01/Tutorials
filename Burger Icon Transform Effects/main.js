let icon = document.querySelector(".icon");
let mySpan = document.querySelectorAll(".icon span");
let iconClicked = true;
icon.addEventListener("click", function () {
  if (iconClicked) {
    mySpan[1].style.opacity = "0";
    mySpan[0].style.backgroundColor = "#f00";
    mySpan[0].style.transform = "rotate(45deg)";
    mySpan[0].style.top = "6px";
    mySpan[2].style.backgroundColor = "#f00";
    mySpan[2].style.transform = "rotate(-45deg)";
    mySpan[2].style.top = "6px";
  } else {
    mySpan[1].style.opacity = "1";
    mySpan[0].style.backgroundColor = "#000";
    mySpan[0].style.transform = "rotate(0deg)";
    mySpan[0].style.top = "0px";
    mySpan[2].style.backgroundColor = "#000";
    mySpan[2].style.transform = "rotate(0deg)";
    mySpan[2].style.top = "12px";
  }
  iconClicked = !iconClicked;
});
