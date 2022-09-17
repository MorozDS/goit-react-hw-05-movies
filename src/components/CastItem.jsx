export default function CastItem({ character, name, profile_path }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w185${profile_path}`}
        alt={`${name}`}
      />
      <h2>{name}</h2>
      <p>
        <span>Character:</span> {character}
      </p>
    </>
  );
}
