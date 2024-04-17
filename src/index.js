import "./style.css";
document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function () {
    if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var adopt = document.querySelector(".adopt");
  adopt.addEventListener("click", function () {
    if (adopt.innerText === "Adopt don't shop") {
      adopt.innerText = "Thank you for adopting!";
    } else {
      adopt.innerText = "Adopt don't shop";
    }
  });
});
