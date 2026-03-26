export default async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=6EZ6XPMA6DNFVVNKCTYKV3489`,
    );
    const dataJSON = await response.json();
    const weatherData = {
      temperature: dataJSON.currentConditions.temp + "F",
      city: dataJSON.address,
      time: dataJSON.currentConditions.datetime,
      description: dataJSON.description,
      todayCondition: dataJSON.currentConditions.conditions,
      tomorrowCondition: dataJSON.days[1].conditions,
      overmorrowCondition: dataJSON.days[2].conditions,
    };
    console.log(dataJSON);
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
