import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie.genres);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1 style={{ textShadow: "red 1px 0 10px" }}>{movie.title}</h1>
            <img src={movie.large_cover_image} alt="" />
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {movie.genres.map((g, i) => (
                <h2
                  style={{
                    marginRight: "40px",
                    color: "red",
                    textShadow: "red 1px 0 10px",
                  }}
                  key={i}
                >
                  {g}
                </h2>
              ))}
            </div>
            <hr />
            <h2
              style={{
                margin: "0 auto",
                width: "700px",
                marginTop: "70px",
                textAlign: "center",
              }}
            >
              {movie.description_full}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
