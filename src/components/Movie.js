import PropTypes from "prop-types";
import styles from "../Link.module.css";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, genres, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>
        <Link to={`/movie/${id}`} className={styles.link}>
          {title}
        </Link>
      </h2>
      <ul style={{ display: "flex" }}>
        {genres.map((genre) => (
          <li style={{ marginLeft: "10px" }} key={genre}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
