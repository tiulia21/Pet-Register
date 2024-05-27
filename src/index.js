import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const volunteerLink = document.querySelector(".menu-item4");
  const submenu = document.querySelector(".submenu");
  if (volunteerLink && submenu) {
    volunteerLink.addEventListener("click", function () {
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  }

  const contact = document.querySelector(".menu-item5");
  const subcontact = document.querySelector(".subcontact");
  if (contact && subcontact) {
    contact.addEventListener("click", function () {
      subcontact.style.display = subcontact.style.display === "block" ? "none" : "block";
    });
  }

  const adopt = document.querySelector(".adopt");
  if (adopt) {
    adopt.addEventListener("click", function () {
      adopt.innerText = adopt.innerText === "Adopt don't shop" ? "Thank you for adopting!" : "Adopt don't shop";
    });
  }

  const galleries = document.getElementsByClassName("gallery");
  const texts = document.getElementsByClassName("text");
  for (let i = 0; i < galleries.length; i++) {
    galleries[i].addEventListener("click", function () {
      const text = texts[i];
      text.style.display = text.style.display === "none" || text.style.display === "" ? "block" : "none";
    });
  }

  const images = document.querySelectorAll(".pet-item img");
  images.forEach(function (image) {
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
        Object.assign(image.style, originalStyle);
      } else {
        image.style.position = "fixed";
        image.style.top = "50%";
        image.style.left = "50%";
        image.style.transform = "translate(-50%, -50%)";
        image.style.width = "auto";
        image.style.height = "100vh";
        image.style.zIndex = "9999";
      }
    });
  });

  const formButtons = document.querySelectorAll(".form");
  const textDetails = document.querySelectorAll(".text-detail");

  formButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleTextDetail(index));
  });

  function toggleTextDetail(index) {
    textDetails.forEach((detail, i) => {
      detail.style.display = i === index ? (detail.style.display === "block" ? "none" : "block") : "none";
    });
  }

  const menuItem3 = document.querySelector(".menu-item3");
  const filterContent = document.querySelector(".filter");

  if (menuItem3 && filterContent) {
    menuItem3.addEventListener("click", function () {
      filterContent.classList.toggle("show");
    });
  }

  const speciesSelect = document.getElementById("animal");
  const petItems = document.querySelectorAll(".pet-item");

  if (speciesSelect) {
    petItems.forEach(item => (item.style.display = "block"));

    speciesSelect.addEventListener("change", function () {
      const selectedSpecies = this.value;

      petItems.forEach(item => {
        const itemSpecies = item.getAttribute("data-specifies");
        item.style.display = selectedSpecies === "select" || itemSpecies === selectedSpecies ? "block" : "none";
      });
    });
    ageSelect.addEventListener("change", function () {
      const selectedAge = this.value;

      petItems.forEach(item => {
        const itemAge = item.getAttribute("data-age");
        item.style.display = selectedAge === "select" || itemAge === selectedAge ? "block" : "none";
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the age filter dropdown
  const ageSelect = document.getElementById("animal-age");
  const petItems = document.querySelectorAll(".pet-item");

  if (ageSelect) {
    // Display all pet items initially
    petItems.forEach(item => (item.style.display = "block"));

    // Add event listener to age dropdown
    ageSelect.addEventListener("change", function () {
      const selectedAge = this.value;

      // Filter pet items based on selected age
      petItems.forEach(item => {
        const itemAge = item.getAttribute("data-age");
        if (selectedAge === "Select" || itemAge === selectedAge) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});
