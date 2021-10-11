import styled from "styled-components";
import { BUTTON_HEIGHT } from "..";
import { Colors } from "../../styles/Colors";
import { ButtonCartProperties } from "./Component";

export const ButtonCartStyles = styled.div<ButtonCartProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;

    .button-cart-content {
      display: flex;
      position: relative;
      border-radius: ${() => BUTTON_HEIGHT.icon / 2}px;
      
      .badge-count {
        position: absolute;
        font-weight: bold;
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        right: -12px;
        top: -12px;
      }

      .button.--btn-icon.--btn-circle {
        pointer-events: none;
      }
    }

    &:hover {
      cursor: pointer;

      .button.--btn-icon.--btn-circle svg {
        svg {
        transform: scale(.9);
        transition: ease-in 40ms;
      }
      }
    }

    &:active, &:focus {
      * {
        outline: none;
      }

      .button.--btn-icon.--btn-circle svg {
        transform: scale(.9);
        transition: ease-in 40ms;
      }
    }
    
    &.--Water {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
    
    &.--Fire {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
    
    &.--Grass {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
    
    &.--Electric {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
    
    &.--Psychic {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
    
    &.--Dark {
      .button-cart-content {
        box-shadow: 0 0 0 1px ${() => Colors.white};

        .badge-count {
          background: ${() => Colors.white};
          color: ${() => Colors.black};
        }
      }
    }
`;
