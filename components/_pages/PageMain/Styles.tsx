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

  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;

    .main-title, .main-subtitle {
      font-family: 'Bungee', cursive;
      text-align: center;
      font-weight: bold;
      align-self: center;
      color: ${() => Colors.white};
      text-shadow: 4px 4px 0 ${() => Colors.black};
      text-transform: uppercase;
    }

    .main-title {
      font-size: 40px;
      color: ${() => Colors.Electric};
      text-shadow: 2px 2px 0 ${() => Colors["Water"]}, 2px 2px 0 ${() => Colors["black"]}, -1px -1px 0 ${() => Colors["black"]}, 4px 4px 0 ${() => Colors["black"]};
      margin-bottom: 24px;
    }
    
    .main-subtitle {
      margin-bottom: 24px;
      font-size: 64px;
      line-height: 72px;
    }

    .shop-types-navigator {
      display: flex;
      flex: 1;

      .shop-type {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        .shop-title {
          font-family: 'Bungee', cursive;
          font-weight: bold;
          font-size: 32px;
          text-align: center;
          opacity: 0.6;
          color: ${() => Colors.white};
        }

        div > img.shop-logo {
          opacity: 0.6;
        }

        &:hover {
          cursor: pointer;

          .shop-title {
            opacity: 1;
          }

          div > img.shop-logo {
            opacity: 1;
          }
        }

        &.--Water {
          background-color: ${() => Colors.Water};
        }

        &.--Fire {
          background-color: ${() => Colors.Fire};
        }

        &.--Grass {
          background-color: ${() => Colors.Grass};
        }

        &.--Electric {
          background-color: ${() => Colors.Electric};
        }

        &.--Psychic {
          background-color: ${() => Colors.Psychic};
        }

        &.--Dark {
          background-color: ${() => Colors.Dark};
        }
      }
    }
  }

  @media (max-width: 928px) {
    .main-content {
      overflow-x: hidden;
      overflow-y: auto;
      
      .main-title, .main-subtitle {
        font-weight: bold;
        align-self: center;
        text-transform: uppercase;
        position: initial;
        z-index: initial;
      }

      .main-title {
        font-size: 32px;
        top: initial;
      }

      .main-subtitle {
        font-size: 40px;
        top: initial;
      }

      .shop-types-navigator {
        flex-wrap: wrap;

        .shop-type {
          min-width: 232px;
          padding: 8px;

          span {
            line-height: 48px;
          }
        }
      }
    }
  }

  @media (max-width: 320px) {
    .main-content {

      .main-title {
        font-size: 24px;
        margin-top: 16px;
        margin-bottom: 16px;
      }

      .main-subtitle {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 32px;
      }
    }
  }
`;
