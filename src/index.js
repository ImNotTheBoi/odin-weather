import "./styles.css";
import getWeatherData from "./apiHandler";

const locationInput = document.querySelector(".location");

locationInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const location = locationInput.value;
    getWeatherData(location);
  }
});

// getWeatherData("pasig");
