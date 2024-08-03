import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ data }) => {
  const { increaseCartItem, decreaseCartItem, deleteCartItem } =
    useShoppingCart();

  const [id, quantity] = data;
  return (
    <li key={id}>
      <p>{quantity}</p>
      <div>
        <div className="flex flex-row ">
          <button onClick={() => decreaseCartItem(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => increaseCartItem(id)}>+</button>
        </div>
        <button onClick={() => deleteCartItem(id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
