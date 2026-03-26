import "./styles.css";
import getWeatherData from "./apiHandler";

const locationInput = document.querySelector(".location");
// const searchButton = document.querySelector(".search");

// searchButton.addEventListener("", () => {
//   const location = locationInput.value;
//   getWeatherData(location);
// });

locationInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const location = locationInput.value;
    getWeatherData(location);
  }
});

getWeatherData("pasig");
