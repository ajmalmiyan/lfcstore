import styled from "styled-components";

export const HeaderCont = styled.div`
  background: white;
  padding: 30px 32px;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.033);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Container = styled.div`
display: flex;
    display: -webkit-flex;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 32px;
`;

export const LogoImg = styled.img`
width: 123px;
`;

export const SearchDiv = styled.div`
margin-left: 64px;
  flex-grow: 1;
  -webkit-flex-grow: 1; 
`;

export const SearchKeyword = styled.input`
height: 36px;
    border: 1px solid #dc0714;
    padding: 0 16px;
    border-radius: 2px 0 0 2px;
    width: 100%;
    max-width: 330px;
    &:focus {
      outline: none;
    }  
`;

export const SearchForm = styled.form`
display: flex;
  display: -webkit-flex;`;

  export const SearchButton = styled.button`
  border-radius: 0 2px 2px 0;
    width: 96px;
  `;

  export const CartDiv = styled.div`
  display: flex;
  display: -webkit-flex;
  margin-left: 64px;
  position: relative;
  z-index: 99;
  `;

export const CartIcon = styled.p`
margin-left: 16px;
  z-index: 99;
  position: relative;
`;