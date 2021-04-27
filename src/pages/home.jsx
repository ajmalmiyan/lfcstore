import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Products/Product";
import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "../contexts/products";
import { CommonStateContext } from "../contexts/common";
import styled from "styled-components";

const ProductWrapper = styled.div`
padding-top: 98px;
`;
const Products = styled.div`
display: flex;
  flex-wrap: wrap;
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
`;
const Home = () => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  const productsList =
    products &&
    products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        !searchKeyword
      );
    });

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  if (isLoading) {
    return (
      <ProductWrapper>
        <h1>Loading...</h1>
      </ProductWrapper>
    );
  }
  return (
    <ProductWrapper>
      <Products>
        {isLoaded &&
          productsList.map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
      </Products>
    </ProductWrapper>
  );
};

export default Home;
