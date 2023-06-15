import MovieDetail from "@/components/pages/movieDetail/MovieDetail";

const getMovie = async (id) => {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  const movie = await res.json();
  return movie;
};

const MovieDetailServer = async ({ params }) => {
  
  const movie = await getMovie(params.id);
  console.log(movie);
  //  "https://res.cloudinary.com/dishtratk/image/upload/v1685473815/disney-app/movies/scale_ozzlog.jpg"
  return (
    <MovieDetail movie={movie}/>
  );
};

export default MovieDetailServer;
