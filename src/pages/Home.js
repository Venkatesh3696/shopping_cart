import PropertyCard from "../components/PropertyCard ";
import StoreItems from "../data/items.json";
const Home = () => {
  return (
    <div>
      <h1>Browse Products</h1>
      <ul>
        {StoreItems.map((product) => (
          <PropertyCard data={product} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
