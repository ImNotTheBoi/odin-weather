import "./styles.css";
import getWeatherData from "./apiHandler";

const locationInput = document.querySelector(".location");
const back = document.querySelector(".back");

const searchSection = document.querySelector(".searchSection");
const mainContent = document.querySelector(".mainContent");
const sideContent = document.querySelector(".sideContent");

const temperature = document.querySelector(".temperature");
const time = document.querySelector(".time");
const city = document.querySelector(".city");
const description = document.querySelector(".description");
const todayCondition = document.querySelector(".todayCondition");
const tomorrowCondition = document.querySelector(".tomorrowCondition");
const overmorrowCondition = document.querySelector(".overmorrowCondition");

locationInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const location = locationInput.value;
    async function appendWeather() {
      const weatherData = await getWeatherData(location);
      if (!weatherData) {
        return;
      }
      temperature.textContent = weatherData.temperature;
      time.textContent = weatherData.time;
      city.textContent = weatherData.city;
      description.textContent = weatherData.description;
      todayCondition.textContent = weatherData.todayCondition;
      tomorrowCondition.textContent = weatherData.tomorrowCondition;
      overmorrowCondition.textContent = weatherData.overmorrowCondition;
      searchSection.style.display = "none";
      mainContent.style.display = "flex";
      sideContent.style.display = "flex";
    }
    appendWeather();
  }
});

back.addEventListener("click", () => {
  searchSection.style.display = "flex";
  mainContent.style.display = "none";
  sideContent.style.display = "none";
});
