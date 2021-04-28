import styled from "styled-components";

export const CartItems = styled.ul`
height: 320px;
  overflow-y: auto;
  width: 360px;
`;

export const DetailCont = styled.div`
margin-top: 24px;
h2{
    margin: 32px 0;
    text-align: center;
}
.auth-message {
    text-align: center;
    padding: 48px 24px;
    border: 1px solid #fff;
    background: #dc0714;
    margin-bottom: 24px;
    border-radius: 8px;
    p {
      margin-bottom: 24px;
      span {
        padding: 4px;
        background: #dddddd;
        border-radius: 4px;
      }
    }
    button {
      background: transparent;
      color: #dc0714;
      border: 1px solid #dc0714;
      border-radius: 8px;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    button {
      border-radius: 8px;
      height: 48px;
      i {
        font-size: 20px;
        vertical-align: middle;
      }
      &:first-child {
        background-color: transparent;
        color: #dc0714;
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

export const CheckoutPage = styled.div`
min-height: calc(100vh - 120px);
  margin-top: 100px;
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    .order-details {
      flex-grow: 1;
    }
    .order-summary {
      flex-basis: 300px;
    }
  }
`;