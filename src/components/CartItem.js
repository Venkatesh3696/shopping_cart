// import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ data }) => {
  // const { increaseCartItem, decreaseCartItem, deleteCartItem } =
  //   useShoppingCart();

  const [quantity] = data;
  return (
    <li>
      <p>{quantity}</p>
      <div>
        <div className="flex flex-row ">
          <button>-</button>
          <p>{quantity}</p>
          <button>+</button>
        </div>
        <button>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
