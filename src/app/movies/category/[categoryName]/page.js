import CardCategory from "@/components/common/cardCategory/CardCategory";
import CardMovie from "@/components/common/cardMovie/CardMovie";

const getData = async (name) => {
  const res = await fetch(`http://localhost:3000/api/movies/category/${name}`);
  const data = await res.json();
  return data;
};

const CategoryPage = async ({ params }) => {
  const moviesByCategory = await getData(params.categoryName);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="flex justify-center flex-wrap px-4">
        {moviesByCategory.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
