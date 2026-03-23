import "./styles.css";
import getWeatherData from "./apiHandler";

const locationInput = document.querySelector(".location");
const searchButton = document.querySelector(".search");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  getWeatherData(location);
});
