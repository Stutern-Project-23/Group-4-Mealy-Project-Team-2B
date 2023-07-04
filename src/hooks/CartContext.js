/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children, params }) => {
  const [currentProductImg, setcurrentProductImg] = useState(null);

  const currentProductHandler = (img) => {
    setcurrentProductImg(img);
  };

  return (
    <CartContext.Provider
      value={{
        currentProductImg,
        currentProductHandler,
        ...params,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
