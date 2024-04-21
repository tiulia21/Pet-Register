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
    if (adopt.innerText == "Adopt don't shop") {
      adopt.innerText = "Thank you for adopting!";
    } else {
      adopt.innerText = "Adopt don't shop";
    }
  });
});

var galleries = document.getElementsByClassName("gallery");
var texts = document.getElementsByClassName("text");

for (let i = 0; i < galleries.length; i++) {
  galleries[i].addEventListener("click", function () {
    var text = texts[i];
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const supportUsLink = document.querySelector("a[data-page='support-us']");
  const supportUsText = document.querySelector(".support");

  if (supportUsLink && supportUsText) {
    supportUsLink.addEventListener("click", function (e) {
      e.preventDefault();
      toggleText(supportUsText);
    });
  }

  const contactUsLink = document.querySelector("a[data-page='contact-us']");
  const contactUsText = document.querySelector(".message");

  if (contactUsLink && contactUsText) {
    contactUsLink.addEventListener("click", function (e) {
      e.preventDefault();
      toggleText(contactUsText);
    });
  }

  const adminLink = document.querySelector("a[data-page='admin']");
  const adminText = document.querySelector(".contact");

  if (adminLink && adminText) {
    adminLink.addEventListener("click", function (e) {
      e.preventDefault();
      toggleText(adminText);
    });
  }
  function toggleText(element) {
    const isHidden = element.style.display === "none";

    document.querySelectorAll(".text").forEach(function (textItem) {
      textItem.style.display = "none";
    });
    if (isHidden) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});
