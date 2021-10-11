import styled from "styled-components";
import { INPUT_DEFAULT_BACKGROUND_COLOR_NAME, INPUT_DEFAULT_COLOR_NAME, INPUT_DEFAULT_HEIGHT } from ".";
import { ShopTypes } from "../../hooks/uiHooks/useGetShopColor";
import { Colors } from '../../styles/Colors';
import { InputProps } from "./Component";

export const InputStyles = styled.div<InputProps>`
  border-radius: ${({ radius }) => radius === 'circle' ? ((INPUT_DEFAULT_HEIGHT / 2) + 'px') : '4px'};
  height: ${() => INPUT_DEFAULT_HEIGHT}px;
  min-height: ${() => INPUT_DEFAULT_HEIGHT}px;
  max-height: ${() => INPUT_DEFAULT_HEIGHT}px;
  display: flex;
  flex: 1;
  background: ${({ color }: { color?: ShopTypes }) => Colors[`--background-${color || INPUT_DEFAULT_BACKGROUND_COLOR_NAME}`]};
  

  &.--bordered {
    box-shadow: 0 0 0 1px ${() => Colors.grey};
  }

  input {
    outline: none;
    display: flex;
    flex: 1;
    padding: 0px;
    border: none;
    background: transparent;
    color: ${({ color }) => Colors[color || INPUT_DEFAULT_COLOR_NAME]};
    padding-right: 10px;
    padding-left: 10px;

    ::placeholder { 
      color: ${() => Colors.grey};
    }
  }
  
`;
