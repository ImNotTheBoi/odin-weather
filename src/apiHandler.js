export default async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=6EZ6XPMA6DNFVVNKCTYKV3489`,
    );
    const dataJSON = await response.json();
    const weatherData = {
      address: dataJSON.resolvedAddress,
      timezone: dataJSON.timezone,
      description: dataJSON.description,
      currentConditions: dataJSON.currentConditions,
      tommorowConditions: dataJSON.days[1],
    };
    console.log(dataJSON);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}
