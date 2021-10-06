import styled from "styled-components";
import { BUTTON_HEIGHT } from "..";
import { Colors } from '../../styles/Colors';
import { SearchInputProps } from "./Component";

export const SearchInputStyles = styled.div<SearchInputProps>`
  display: flex;

  .search-form {
    display: flex;
    flex: 1;

    .search-input-button-wrapper {
      display: flex;
      align-items: center;
      margin-left: ${() => ((BUTTON_HEIGHT.icon - 1) * -1)}px;
    }
  }

  &.--Water {
    .search-input {
      background: ${() => Colors.white};

      input {
        color: ${() => Colors.black};
        
        &::placeholder {
          color: ${() => Colors["--text-grey"]}
        }
      }
    }

    .search-input-button-wrapper {
      .button.--btn-icon.--btn-circle .btn-content {
        background: ${() => Colors.Water};

        &:hover {
          background: ${() => Colors["--hover-Water"]};
        }

        &:active {
          background: ${() => Colors["--action-Water"]};

          svg {
            transform: scale(.9);
            transition: ease-in 40ms;
          }
        }
      }

      svg.btn-icon {
        color: ${() => Colors.white};
      }
    }
  }
`;
