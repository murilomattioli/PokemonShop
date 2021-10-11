import { CSSProperties } from "styled-components";

export interface ModalCustomProps {
  className?: string,
  component: any,
  showExit?: boolean,
  onClickClose?: () => void,
  style?: CSSProperties,
};
