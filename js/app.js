"use strict";

(function (app) {
  app.roomItems = [];
  app.selectedItem = {};

  app.home = function () {
    currentYear();
  };

  app.about = function () {
    currentYear();
  };

  app.booking = async function () {
    currentYear();

    await loadRoomData();
    updateBookings();
  };

  function currentYear() {
    const copyright = document.getElementById("copyright");
    copyright.innerText = new Date().getFullYear();
  }

  async function loadRoomData() {
    const cacheData = sessionStorage.getItem("site-data");

    if (cacheData !== null) {
      app.roomItems = JSON.parse(cacheData);
    } else {
      const rawData = await fetch("./js/rooms.json");
      const data = await rawData.json();
      app.roomItems = data;
      sessionStorage.setItem("site-data", JSON.stringify(data));
    }
  }

  function updateBookings() {
    const roomDisplay = document.getElementById("room-display");

    const roomContainer = document.createElement("div");
    roomContainer.id = "room-container";
    roomDisplay.appendChild(roomContainer);

    app.roomItems.forEach((el) => {
      const roomItem = document.createElement("div");
      roomItem.classList.add("room-item");

      const roomText = document.createElement("div");
      roomText.classList.add("room-text");
      const roomTitle = document.createElement("h3");
      const roomDescription = document.createElement("p");
      roomTitle.innerText = el.roomTitle;
      roomDescription.innerText = el.roomDescription;
      roomText.appendChild(roomTitle);
      roomText.appendChild(roomDescription);

      const roomImg = document.createElement("div");
      const roomImgSrc = document.createElement("img");
      roomImg.classList.add("room-img");
      roomImgSrc.src = el.image;
      roomImg.appendChild(roomImgSrc);

      const roomAmenities = document.createElement("div");
      const amenitiesTitle = document.createElement("h3");
      amenitiesTitle.innerText = "Amenities";
      roomAmenities.appendChild(amenitiesTitle);

      roomAmenities.classList.add("room-amenities");
      el.amenities.forEach((el) => {
        const amenityImgSrc = document.createElement("img");
        amenityImgSrc.src = el.amenityImg;
        roomAmenities.appendChild(amenityImgSrc);
      });

      roomItem.appendChild(roomText);
      roomItem.appendChild(roomImg);
      roomItem.appendChild(roomAmenities);

      roomContainer.appendChild(roomItem);
    });
  }
})((window.app = window.app || {}));
