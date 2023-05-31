import Movies from "@/components/pages/movies/Movies";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  // const data = await res.json();
  return res.json();
};

// const getData = ()=>{
//   const data = fetch("http://www.omdbapi.com/?&apikey=d3d9c7eb&s=avengers")
//   data.then( res => res.json()).then(res =>{return res})
// }

// ESTO ES SERVER COMPONENT
export default async function Home() {
  const movies = await getData();
  console.log(movies);
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}
