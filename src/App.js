import "./App.css";
import { Movie } from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { loadMovies } from "./movie-slice";

function App() {
  const movies = useSelector((state) => state.moviesSlice.movies);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Movies</h1>
      {movies.map((movie) => (
        <Movie id={movie.id} key={movie.id} />
      ))}

      <button onClick={() => dispatch(loadMovies())}>Load</button>
    </div>
  );
}

export default App;
