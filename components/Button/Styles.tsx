import styled, { css } from "styled-components";
import { BUTTON_WIDTH, BUTTON_HEIGHT } from ".";
import { Colors } from '../../styles/Colors';
import { ButtonProperties } from "./Component";

export const ButtonStyles = styled.div<ButtonProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${({ color = 'black' }) => Colors?.[color]};
  height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  min-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  max-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  width: ${({ width }) => width || BUTTON_WIDTH.default}px;
  min-width: ${({ width }) => width || BUTTON_WIDTH.default}px;
  max-width: ${({ width }) => width || BUTTON_WIDTH.default}px;

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

  .btn-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: ${({ color = 'black' }) => Colors[color]};
    box-shadow: 0 0 0 1px inset ${({ color = 'black' }) => (color === 'white' ? Colors.black : 'transparent')};
    overflow: hidden;

    .btn-icon {
      font-size: 16px;
      color: ${({ color = 'black' }) => Colors[`--icon-${color}`]}};
    }

    .btn-text-wrapper {
      display: flex;
      flex: 1;
      outline: none;
      padding: 0px;
      border: none;
      height: 100%;
      background: transparent;
      color: ${({ color = 'black' }) => Colors?.[color]};
      align-items: center;
      justify-content: center;
      overflow: hidden;

      span.text {
        color: ${({ color = 'black' }) => Colors?.[color === 'black' ? 'white' : 'black']};
        font-weight: 700;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
        padding-left: 10px;
      }
    }

    &:hover {
      cursor: pointer;

      ${({ color = 'black' }) => (color !== 'transparent') ? css`
          background: ${() => Colors[`--hover-${color}`]};
      `: css`
        &.--btn-icon {
          opacity: 0.08;
        }
      `}
    }

    &:active, &:focus {
      * {
        outline: none;
      }

      ${({ color = 'black' }) => (color !== 'transparent') ? css`
          background: ${() => Colors[`--action-${color}`]};
      `: css`
          &.--btn-icon {
            opacity: 0.16;
          }
      `}
    }
`;
