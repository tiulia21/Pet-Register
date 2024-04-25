import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  var volunteerLink = document.querySelector(".menu-item4");
  var submenu = document.querySelector(".submenu");

  if (volunteerLink && submenu) {
    volunteerLink.addEventListener("click", function () {
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var contact = document.querySelector(".menu-item5");
  var subcontact = document.querySelector(".subcontact");
  if (contact && subcontact) {
    contact.addEventListener("click", function () {
      if (subcontact.style.display === "block") {
        subcontact.style.display = "none";
      } else {
        subcontact.style.display = "block";
      }
    });
  }
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
  const images = document.querySelectorAll(".pet-item img");

  images.forEach(function (image) {
    // Store the original styles
    const originalStyle = {
      width: image.style.width,
      height: image.style.height,
      position: image.style.position,
      top: image.style.top,
      left: image.style.left,
      zIndex: image.style.zIndex,
      transform: image.style.transform
    };

    image.addEventListener("click", function () {
      if (image.style.position === "fixed") {
        // Revert to original styles
        image.style.position = originalStyle.position;
        image.style.top = originalStyle.top;
        image.style.left = originalStyle.left;
        image.style.width = originalStyle.width;
        image.style.height = originalStyle.height;
        image.style.zIndex = originalStyle.zIndex;
        image.style.transform = originalStyle.transform;
      } else {
        // Apply full-screen styles
        image.style.position = "fixed";
        image.style.top = "50%";
        image.style.left = "50%";
        image.style.transform = "translate(-50%, -50%)";
        image.style.width = "auto"; // Adjust this if needed
        image.style.height = "100vh";
        image.style.zIndex = "9999";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var formButtons = document.querySelectorAll(".form");
  var textDetails = document.querySelectorAll(".text-detail");

  formButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      toggleTextDetail(index);
    });
  });

  function toggleTextDetail(index) {
    textDetails.forEach(function (detail, i) {
      if (i === index) {
        detail.style.display = detail.style.display === "block" ? "none" : "block";
      } else {
        detail.style.display = "none";
      }
    });
  }
});
