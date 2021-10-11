import styled from "styled-components";
import { MainProps } from "../../../pages/Main";
import { Colors } from '../../../styles/Colors';

export const PageMainStyles = styled.div<MainProps>`
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
`;
