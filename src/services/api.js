import axios from 'axios';

export const API_KEY = '9c65dafe9c7f1692e7e37e0f21a522e0';

// Запрос трендових фильмов

export async function fetchTrendingMovies(
  page = 1,
  media_type = 'movie',
  time_window = 'day'
) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${API_KEY}`
  );
  return data;
}
