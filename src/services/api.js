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

//  поиск кинофильма по ключевому слову на странице фильмов
export async function fetchSearchQuery(query, page = 1, language = 'en-US') {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`
  );
  return data;
}
//  запрос полной информации о фильме для страницы кинофильма

export async function fetchDetailsMovie(movie_id, language = 'en-US') {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${language}`
  );
  return data;
}

// запрос информации о актёрском составе для страницы кинофильма

export async function fetchCredits(movie_id, language = 'en-US') {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`
  );
  return data;
}

// запрос обзоров для страницы кинофильма
export async function fetchMovieReviews(
  movie_id,
  page = 1,
  language = 'en-US'
) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}&page=${page}`
  );
  return data;
}
