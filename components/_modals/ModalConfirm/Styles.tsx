import styled from "styled-components";
import { ModalConfirmProps, MODAL_CONFIRM_DEFAULT_HEIGHT, MODAL_CONFIRM_DEFAULT_WIDTH } from ".";
import { Colors } from '../../../styles/Colors';

export const ModalConfirmStyles = styled.div<ModalConfirmProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  position: fixed;
  z-index: 9999999;
  align-items: center;
  top: 0;
  background: rgba(119, 119, 119, 0.8);

  .content {
    margin-top: 10vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    min-height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    max-height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    width: 92vw;
    max-width: ${() => MODAL_CONFIRM_DEFAULT_WIDTH}px;
    box-shadow: 0 0 0 1px inset ${() => Colors["grey"]};
    background: ${() => Colors.white};
    padding: 0 58px;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
`;
