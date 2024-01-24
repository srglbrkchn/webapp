import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export function getWeather(lat, lon, timezone) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime",
    {
      params: {
        latitude: lat,
        longitude: lon,
        timezone,
      },
    }
  );
}
