import styled from "styled-components";
import { PokemonCardProps, POKEMON_CARD_HEIGHT, POKEMON_CARD_WIDTH } from ".";
import { Colors } from "../../styles/Colors";

export const PokemonCardStyles = styled.div<PokemonCardProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: ${() => POKEMON_CARD_HEIGHT}px;
  min-width: ${() => POKEMON_CARD_WIDTH}px;
  max-width: ${() => POKEMON_CARD_WIDTH}px;
  border-radius: 8px;
  
  .pokemon-card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    background-color: ${() => Colors.white};
    border-radius: 8px;

    .image-wrapper {
      min-width: 200px;
      max-width: 200px;
      border-radius: 8px;
      margin: 0 auto;

      :hover {
        transform: scale(1.05);
        transition: ease-in 40ms;
      }
    }

    .info-wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 16px 24px;
      gap: 16px;

      .price-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span.price {
          font-size: 24px;
          font-weight: bold;
        }
        span.old-price {
          font-size: 16px;
          text-decoration: line-through;
          color: ${() => Colors["--text-grey"]}
        }
      }
    }

    .add-button {
      display: flex;
      flex: 1;
      position: relative;

      @keyframes myAnim {
        0%,
        50%,
        100% {
          opacity: 1;
        }
        
        25%,
        75% {
          bottom: 32px;
          opacity: 0;
        }
      }

      
      :active {
        ::after {
          content: '+1';
          font-size: 24px;
          font-weight: bold;
          color: ${() => Colors.white};
          position: absolute;
          bottom: 0px;
          right: 18px;
          animation: myAnim .5s ease 0s 1;
        }
      }
    }
  }

  &.--Water {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.white};
      }
    }
  }

  &.--Fire {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.white};
      }
    }
  }

  &.--Grass {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.white};
      }
    }
  }

  &.--Electric {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.black};
      }
    }
  }

  &.--Psychic {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.white};
      }
    }
  }

  &.--Dark {
    .pokemon-card-content {
      .add-button span {
        color: ${() => Colors.white};
      }
    }
  }
`;
