import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImage, genres, runtime, summary }) {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <img src={coverImage}></img>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>Run time: {runtime} minutes</p>
      <p>{summary === "" ? "정보가 없습니다." : summary}</p>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf[PropTypes.string].isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
