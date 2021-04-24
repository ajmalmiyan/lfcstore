import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup
} from "../../contexts/cart";
import {CartItems} from './Styles'
const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const history = useHistory();
  
  // const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const cartQuantity = items.length;
  const cartTotal = items
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    history.push("/checkout");
  };

  return (
    <div className={classNames("cart-preview", { active: isCartOpen })}>
            <div>
              <p>No. of items:<strong>{cartQuantity}</strong></p>
              <p>Sub Total:<strong>{cartTotal}</strong></p>
            </div>
            {/* </div> */}
      <CartItems>
        {items.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={product.image} />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${product.quantity} ${
                    product.quantity > 1 ? "Nos." : "No."
                  }`}
                </p>
                <p className="amount">{product.quantity * product.price}</p>
              </div>
              <button
                className="product-remove"
                onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
      </CartItems>
      <div className="action-block">
        <button
          type="button"
          className={classNames({ disabled: items && items.length === 0 })}
          onClick={handleProceedCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPreview;
