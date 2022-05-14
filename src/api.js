// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  } // Poner un 0 delante si es menor de 10.
};

const currentDay = getCurrentDay();

// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  } // Poner un 0 delante si es menor de 10.
};

const currentMonth = getCurrentMonth();

// Getting the year
const currentYear = new Date().getFullYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// Getting last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

// Getting next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=8039a19b75ae4d48926d74a4ff4f5069&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
