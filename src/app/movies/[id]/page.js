const getMovie = async (id) => {
  const res = await fetch(`http:localhost:3000/api/movies/${id}`);
  const movie = await res.json();
  return movie;
};

const MovieDetail = async ({ params }) => {
  // console.log(params.id);
  const movie = await getMovie(params.id);
  console.log("front:", movie)
  return <div>{movie.duration}</div>;
};

export default MovieDetail;
