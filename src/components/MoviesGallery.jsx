export function MoviesGallery({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
