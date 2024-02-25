import { func } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.medium_cover_image}></img>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>Run time: {movie.runtime} minutes</p>
            <p>{movie.summary === "" ? "정보가 없습니다." : movie.summary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
