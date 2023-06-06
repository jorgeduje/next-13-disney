const getData = async (name) => {
  const res = await fetch(`http://localhost:3000/api/movies/category/${name}`);
  const data = await res.json();
  return data;
};

const CategoryPage = async ({ params }) => {
  const moviesByCategory = await getData(params.categoryName);

  return <div>{JSON.stringify(moviesByCategory)}</div>;
};

export default CategoryPage;
