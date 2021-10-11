import styled, { css } from "styled-components";
import { BUTTON_WIDTH, BUTTON_HEIGHT, BASE_SIZE_ICON_BUTTON } from ".";
import { Colors } from '../../styles/Colors';
import { ButtonProperties } from "./Component";

export const ButtonStyles = styled.div<ButtonProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${({ fillColor: color = 'black' }) => Colors?.[color]};
  height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  min-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  max-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  min-width: ${({ width }) => width || BUTTON_WIDTH.default}px;
  
  .btn-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: ${({ fillColor = 'black' }) => Colors[fillColor]};
    overflow: hidden;
    
    .btn-icon {
      font-size: ${({ iconSize = 2 }) => iconSize * BASE_SIZE_ICON_BUTTON}px;
      color: ${({ iconColor = 'white' }) => Colors[iconColor]}};
    }

    .btn-text-wrapper {
      display: flex;
      flex: 1;
      outline: none;
      padding: 0px;
      border: none;
      height: 100%;
      background: transparent;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      
      span.text {
        color: ${({ textColor = 'black' }) => Colors?.[textColor]};
        font-weight: 700;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
        padding-left: 10px;
      }
    }

    &.--btn-shadow-dark {
      box-shadow: 0 0 1px 0 ${() => Colors["--shadow-dark"]};
    }
    &.--btn-shadow-light {
      box-shadow: 0 0 1px 0 ${() => Colors["--shadow-light"]};
    }

    &.--btn-circle {
      border-radius: 50%;
      overflow: hidden;
    }
    
    &.--btn-icon {
      height: ${({ height }) => height || BUTTON_HEIGHT.icon}px;
      min-height: ${({ height }) => height || BUTTON_HEIGHT.icon}px;
      max-height: ${({ height }) => height || BUTTON_HEIGHT.icon}px;
      width: ${({ width }) => width || BUTTON_WIDTH.icon}px;
      min-width: ${({ width }) => width || BUTTON_WIDTH.icon}px;
      max-width: ${({ width }) => width || BUTTON_WIDTH.icon}px;
  
      .btn-content {
        align-items: center;
        justify-content: center;
      }
    }
  
    &.--btn-disabled {
      pointer-events: none;
      opacity: .3;
    }
    
    &:hover {
      cursor: pointer;
      
      ${({ fillColor = 'black' }) => (fillColor !== 'transparent') ? css`
          background: ${() => Colors[`--hover-${fillColor}`]};
      `: ''}
    }

    &:active {
      span, svg {
        transform: scale(.9);
        transition: ease-in 40ms;
      }
    }

    &:active, &:focus {
      * {
        outline: none;
      }

      ${({ fillColor: color = 'black' }) => (color !== 'transparent') ? css`
          background: ${() => Colors[`--action-${color}`]};
      `: ''}
    }
`;
