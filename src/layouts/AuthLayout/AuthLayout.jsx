import React from "react";
import { Link } from "react-router-dom";
import { AuthCont,Wrapper,AuthBrand,AuthImg } from "./Styles";
const AuthLayout = ({ children }) => {
  return (
    <AuthCont>
      
      <Wrapper>
        <AuthBrand>
          <Link to="/">
            <AuthImg
              src="/images/lfc_logo.svg"
              alt="Lfc Logo"
            />
          </Link>
        </AuthBrand>
        <div>{children}</div>
      </Wrapper>
    </AuthCont>
  );
};

export default AuthLayout;
