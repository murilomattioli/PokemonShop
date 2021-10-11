import styled from "styled-components";
import { HEADER_HEIGHT } from ".";
import { Colors } from '../../styles/Colors';
import { HeaderProperties } from "./Component";

export const HeaderStyles = styled.header<HeaderProperties>`
  display: flex;
  flex-direction: column;
  min-height: ${() => HEADER_HEIGHT}px;

  .header-controls {
    display: flex;
    gap: 24px;
    align-self: flex-end;
    margin-top: -104px;
    margin-bottom: 48px;

    .header-control {
      display: flex;
    }
  }

  .header-content {
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 16px;
    gap: 24px;

    .search-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .logo-wrapper {
        display: flex;
        flex: 1;
        align-items: center;
      }
    }
  }
  
  &.Water {
    background: ${() => Colors.Water};
  }
  
  &.Fire {
    background: ${() => Colors.Fire};
  }
  
  &.Grass {
    background: ${() => Colors.Grass};
  }
  
  &.Electric {
    background: ${() => Colors.Electric};
  }
  
  &.Psychic {
    background: ${() => Colors.Psychic};
  }
  
  &.Dark {
    background: ${() => Colors.Dark};
  }

  @media (min-width: 577px) {
    .header-content {
      padding: 16px 10vw;
    }
  }
  @media (min-width: 808px) {
    .header-content {
      flex-direction: row-reverse;
      padding: 16px;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .search-input-component {
        margin-right: 16px;
        display: flex;
        flex: 1;
      }

      .search-wrapper {
        flex-direction: row;
        flex: 1;

        .logo-wrapper {
          flex: initial;
        }

        .search-input-component {
          margin-right: 0px;
          max-width: 50vw;
        }
      }

      .header-controls {
        margin: 0px;
        align-self: center;
      }
    }
    .modal-custom {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    .header-content {
      max-width: 60vw;
      align-self: center;
    }
  }
  
  @media (min-width: 1920px) {
    .header-content {
      max-width: 45vw;
    }
  }
`;
