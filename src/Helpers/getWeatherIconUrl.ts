/** @format */

export const getWeatherIconUrl = (iconNumber: string | number) => {
  iconNumber = iconNumber < 10 ? `0${iconNumber}` : iconNumber;
  const src = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNumber}-s.png`;
  return src;
};
