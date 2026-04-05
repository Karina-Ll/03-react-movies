import axios from 'axios';

// Отримуємо токен із файлу .env
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    // Використовуємо Bearer Auth
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
});