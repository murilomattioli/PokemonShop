import styled from "styled-components";
import { MainProps } from "../../../pages/Main";
import { Colors } from '../../../styles/Colors';

export const PageElectricStyles = styled.div<MainProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background: ${() => Colors["--background-black"]};

  .electric-shop-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    .modal-custom .purchase-feedback {
      width: 300px;
      height: 300px;
      display: flex;
      background-color: ${() => Colors.white};
      border-radius: 8px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${() => Colors.black};
      box-shadow: 0 0 0 8px ${() => Colors.Electric};
      
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title {
        font-size: 24px;
        margin-bottom: 16px;
      }
      
      .message { 
        font-size: 24px;
        margin-bottom: 8px;
      }
      
      .message-secondary {
        padding: 8px 24px;
        border-radius: 8px;
        font-size: 40px;
        font-weight: bold;
        color: ${() => Colors.Electric};
      }
    }

    .electric-shop-content {
      display: flex;
      flex: 1;
      height: 100%;
      overflow: hidden;
      
      .list-wrapper {
        display: flex; 
        flex: 1;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar-track {
          border-radius: 6px;
          background-color: ${() => Colors["--background-Electric"]};
        }
        
        &::-webkit-scrollbar {
          width: 12px;
          background-color: transparent;
          border-radius: 6px;
        }
        
        &::-webkit-scrollbar-thumb {
          border-radius: 6px;
          background-color: ${() => Colors.Electric};
        }
      }

      .cart-section {
        display: flex;
      }
    }
  }

  @media (max-width: 807px) {
    .electric-shop-container .electric-shop-content .cart-wrapper {
      display: none;
      width: 0px;
      opacity: 0;
      transition: ease-in 400ms;
    }
  }
  @media (min-width: 769px) {
    .electric-shop-container .electric-shop-content .cart-wrapper {
      display: flex;
      max-width: 360px;
      overflow: hidden;
    }
  }
`;
