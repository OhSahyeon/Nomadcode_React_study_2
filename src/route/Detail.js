import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  });

  const [movie, setMovie] = useState([]);
  console.log(movie);
  const MAP = movie.genres;

  return (
    <div>
      <Link to="/">Go Home</Link>
      <h2>{movie.title}</h2>
      <img src={movie.medium_cover_image}></img>
      <ul>
        {MAP.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <p>Run time: {movie.runtime} minutes</p>
      <p>{movie.summary === "" ? "정보가 없습니다." : movie.summary}</p>
    </div>
  );
}

export default Detail;
