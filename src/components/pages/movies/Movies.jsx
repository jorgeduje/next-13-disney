
import Image from "next/image";
import Link from "next/link";

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies && movies.map((e) => (
        <div key={e.id}>
          {/* <Image src={e.frontImage} width={200} height={200} alt="asd" style={{height: "auto"}} /> */}
          <img src={e.frontImage} alt="asd" />
          <h1>{e.name}</h1>
          <Link href={`/movies/${e.id}`}>Ver mas</Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
