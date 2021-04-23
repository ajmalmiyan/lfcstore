import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "../../contexts/cart";
import {ProductCont,ProductImage,Img,ProductName,ProductPrice,ProductAction} from './Styles'
const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { image, name, price, id, stock } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <ProductCont>
      <ProductImage>
        <Img src={image} alt={name} />
      </ProductImage>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <ProductAction>
        <button
          type="button"
          onClick={handleAddToCart}
        >
          {!isAdded ? "Add to Bag" : "Added"}
        </button>
      </ProductAction>
    </ProductCont>
  );
};

export default ProductCard;
