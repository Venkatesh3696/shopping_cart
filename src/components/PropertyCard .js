import { useShoppingCart } from "../context/ShoppingCartContext";

const PropertyCard = ({ data }) => {
  const { increaseCartItem } = useShoppingCart();

  const { id, title, price, description, imageUrl } = data;
  return (
    <li key={id}>
      <img src={imageUrl} alt={`image-${id}`} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button onClick={() => increaseCartItem(id)}>Add To Cart</button>
    </li>
  );
};

export default PropertyCard;
