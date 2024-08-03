import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Cart = () => {
  const {
    cartQuantity,
    cartItems,
    // getCartPrice,
    // getItemQuantity,
    // increaseCartItem,
    // decreaseCartItem,
    // deleteCartItem,
    // clearCart,
  } = useShoppingCart();
  console.log("in cart js", cartItems);
  useEffect(() => {
    console.log("use effect in cart");
  }, [cartItems]);
  return (
    <div>
      <h1>Cart</h1>
      <p>Quantity: {cartQuantity}</p>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={item.id} data={item} />;
        })}
      </ul>
      <h2>Sub Total :</h2>
    </div>
  );
};

export default Cart;
