import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "../../contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "../../contexts/common";
import CartPreview from "../../components/Cart/CartPreview";
import {HeaderCont,Container,LogoImg,SearchDiv,SearchKeyword,SearchForm,SearchButton,CartDiv,CartIcon} from './Styles';
const Header = (props) => {
  const { items: cartItems } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  return (
    <HeaderCont>
      <Container>
        <div>
          <Link to="/">
            <LogoImg
              src="/images/lfc_logo.svg"
              alt="Lfc Logo"
            />
          </Link>
        </div>

        <SearchDiv>

          <SearchForm action="#" method="get" >
            <SearchKeyword
              type="search"
              placeholder="Search entire store here..."
              onChange={handleSearchInput}
            />
            <SearchButton
              type="submit"
            />
          </SearchForm>
        </SearchDiv>


        <CartDiv>
                    <strong>{cartQuantity}</strong>
                 
          <CartIcon onClick={handleCartButton}>
            <img
              src="/images/cart.svg"
              alt="Cart"
            />
            {cartQuantity ? (
              <span>{cartQuantity}</span>
            ) : (
              ""
            )}
          </CartIcon>
          <CartPreview />
        </CartDiv>
      </Container>
    </HeaderCont>
  );
};

export default Header;
