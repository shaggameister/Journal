const hidden = document.getElementById("hidden");
const viewBtn = document.getElementById("view-btn");
let isClicked = false;

viewBtn.addEventListener("click", function () {
  if (!isClicked) {
    hidden.style.display = "block";
    viewBtn.innerText = "View Less";
    isClicked = true;
  } else if (isClicked) {
    hidden.style.display = "none";
    viewBtn.innerText = "View More";
    isClicked = false;
  }
});
