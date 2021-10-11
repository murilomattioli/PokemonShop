import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { ShopLogoProperties } from "./Component";

export const ShopLogoStyles = styled.div<ShopLogoProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;

    .shop-logo-content {
      display: flex;
      width: fit-content;
      align-items: center;
      gap: 16px;
      height: 32px;
      
      .shop-logo-img {
        border-radius: 16px;
      }
      
      .shop-logo-text {
        font-family: 'Bungee', cursive;
        font-weight: bold;
      }

      :hover {
        cursor: pointer;
      }
    }

    &.--Water {
      .shop-logo-content {
        .shop-logo-img {
          box-shadow: 0 0 0 1px inset ${() => Colors.white};
        }
        
        .shop-logo-text {
          color: ${() => Colors.white};
        }
      }
    }

    &{
      .shop-logo-content {
        .shop-logo-img {
          box-shadow: 0 0 0 1px inset ${() => Colors.white};
        }
        
        .shop-logo-text {
          color: ${() => Colors.white};
        }
      }
    }

    &.--Grass {
      .shop-logo-content {
        .shop-logo-img {
          box-shadow: 0 0 0 1px inset ${() => Colors.white};
        }
        
        .shop-logo-text {
          color: ${() => Colors.white};
        }
      }
    }

    &.--Electric {
      .shop-logo-content {
        .shop-logo-img {
          box-shadow: 0 0 0 1px inset ${() => Colors.white};
        }
        
        .shop-logo-text {
          color: ${() => Colors.white};
        }
      }
    }
`;
