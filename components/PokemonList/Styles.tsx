import styled from "styled-components";
import { PokemonListProps } from ".";
import { POKEMON_CARD_WIDTH } from "..";
import { Colors } from "../../styles/Colors";

export const PokemonListStyles = styled.div<PokemonListProps>`
  display: flex;
  flex: 1;
  flex-direction: column;

  .pokemon-list-content {
    display: flex;
    flex: 1 auto;
    height: 0px;
    max-height: 100%;
    gap: 16px;
    flex-wrap: wrap;
    padding: 16px;
    justify-content: center;

    .pokemon-item {
      display: flex;
      flex: 1;
      max-width: ${POKEMON_CARD_WIDTH}px;
    }

    .no-results-content {
      display: flex;
      flex: 1;
      margin-top: 48px;
      

      .title {
        direction: flex;
        flex: 1;
        font-size: 1.8em;
        color: ${() => Colors["--text-grey"]};
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 16px 48px;
      }
    }
  }
`;
