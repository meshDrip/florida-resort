import roomData from "./rooms.json";
import importAll from "./helper";
import { currentYear } from "./helper";
import css from "../styles/main.css";

currentYear();

const images = importAll(
  require.context("../assets/rooms", false, /\.(png|jpe?g|svg)$/),
  require.context("../assets/rooms/amenities", false, /\.(png|jpe?g|svg)$/)
);

let roomItems = [];
let selectedItem = {};

async function loadRoomData() {
  const cacheData = sessionStorage.getItem("site-data");

  if (cacheData !== null) {
    roomItems = JSON.parse(cacheData);
  } else {
    roomItems = roomData;
    sessionStorage.setItem("site-data", JSON.stringify(roomData));
  }

  updateBookings();
}
loadRoomData();

function updateBookings() {
  const roomDisplay = document.getElementById("room-display");
  const roomContainer = document.createElement("div");

  roomContainer.id = "room-container";
  roomDisplay.appendChild(roomContainer);
  roomItems.forEach((el) => {
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
