import { createContext, useContext, useState } from "react";

const shoppingCartContext = createContext({});

export const useShoppingCart = () => useContext(shoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartQuantity = () => {
    cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
  };

  const getItemQuantity = (id) => {
    return cartItems.find((item) => (id === item.id)?.quantity || 0);
  };

  const increaseCartItem = (id) => {
    console.log("at context leevl state", id, cartItems);
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartItem = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => id !== item.id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const deleteCartItem = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  //   const clearCart = () => {
  //     setCartItems([]);
  //   };

  return (
    <shoppingCartContext.Provider
      value={{
        cartQuantity,
        cartItems,
        getItemQuantity,
        increaseCartItem,
        decreaseCartItem,
        deleteCartItem,
        // clearCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
