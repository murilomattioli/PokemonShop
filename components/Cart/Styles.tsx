import styled from "styled-components";
import { CART_HEIGHT } from ".";
import { Colors } from '../../styles/Colors';
import { CartProperties } from "./Component";

export const CartStyles = styled.div<CartProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 84vh;
  width: 78vw;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 0 1px inset ${() => Colors["--border-grey"]};
  
  .cart-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: ${() => Colors.white};
    border-radius: 16px;
    gap: 16px;
    padding-top: 24px;
    overflow: hidden;
    position: relative;

    .cart-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${() => Colors["--text-grey"]};
      font-size: 12px;
      gap: 8px;

      .title {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .cart-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;
      gap: 32px;

      .cart-item {
        display: flex;
        
        .cart-item-content {
          display: flex;
          flex: 1;
          gap: 16px;
          align-items: center;
          padding: 0px 16px;

          .cart-image {
            background-color: ${() => Colors.grey};
            border-radius: 8px;
          }
          
          .cart-item-title {
            display: flex;
            flex: 1;
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;  

            .name {
              font-weight: bold;
            }
          }

          .cart-item-amount {
            display: flex;
            flex-direction: column;
            height: 100%;
            align-items: center;
            justify-content: space-around;

            .amount-text {
              color: ${() => Colors["--text-grey"]};
            }

            .button:disabled {
              cursor: not-allowed;
            }
          }
        }
      }

      
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: ${() => Colors["--background-black"]};
      }
      
      &::-webkit-scrollbar {
        width: 12px;
        background-color: transparent;
        border-radius: 10px;
      }
      
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${() => Colors.black};
      }
    }

    .empty-cart {
      display: flex;
      justify-content: center;
      margin-top: 80px;
      .title {
        text-align: center;
        color: ${Colors["--text-grey"]};
      }
    }
    
    .total-price-wrapper {
      display: flex;
      justify-content: center;
      
      span.total-price-label {
        margin-right: 8px;
        color: ${() => Colors["--text-grey"]};
      }
      
      span.total-price {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 769px) {
    max-width: 35vw;
    height: 100%;

    &, .cart-content {
      border-radius: 0px;
    }
  }
  
  &.Water {
    .cart-content {
      background-color: ${() => Colors.white};
      
      .cart-title {
        
        .title {
          color: ${() => Colors.black};
        }
      }

      .cart-list {
        
        
        &::-webkit-scrollbar-thumb {
          background-color: ${() => Colors.Water};
        }
      }
    };
  }
  `;
