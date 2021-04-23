import styled from "styled-components";

export const ProductCont = styled.div`
  background: #fff;
  margin: 16px;
  width: 200px;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
export const ProductImage = styled.div`
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  max-height: 300px;
`;
export const Img = styled.img`
  cursor: zoom-in;
  width: 100%;
  height: auto;
  transition: transform 300ms ease-in;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductName = styled.h4`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  color: #666;
  padding: 0 16px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 16px;
  color: #666;
  padding: 0 16px;
  text-align: center;
  &:before {
    content: "£ ";
  }
`;

export const ProductAction = styled.div`
  padding: 16px;
  button {
    width: 100%;
    transition: all 300ms ease-in;
    &.added {
      background: #dc0714;
    }
  }
`;
