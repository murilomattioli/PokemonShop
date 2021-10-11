import styled from "styled-components";
import { BUTTON_HEIGHT } from "..";
import { Colors } from '../../styles/Colors';
import { SearchInputProps } from "./Component";

export const SearchInputStyles = styled.div<SearchInputProps>`
  display: flex;

  .search-form {
    display: flex;
    flex: 1;

    .search-input {
      padding-left: 16px;
      padding-right: ${() => ((BUTTON_HEIGHT.icon + 8))}px;
    }

    .search-input-button-wrapper {
      display: flex;
      align-items: center;
      margin-left: ${() => ((BUTTON_HEIGHT.icon - 1) * -1)}px;
    }
  }

  &.--can-clear {
    position: relative;
    align-items: center;

    .search-form {
      .search-input {
        padding-right: ${() => ((BUTTON_HEIGHT.icon + 4) * 2)}px;
      } 

    }
    .btn-clear-search {
      margin-left: -24px;
      transition: ease-in 40ms;
      transition-property: all;
      position: absolute;
      right: ${() => (((BUTTON_HEIGHT.icon * 1) + 4))}px;
    }

    .button.--btn-icon.--btn-circle.btn-clear-search .btn-content {
      background-color: ${() => Colors["grey"]};

      svg.btn-icon {
        color: ${() => Colors["--text-grey"]};
      }
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

  &.--Fire {
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
        background: ${() => Colors.Fire};

        &:hover {
          background: ${() => Colors["--hover-Fire"]};
        }

        &:active {
          background: ${() => Colors["--action-Fire"]};

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

  &.--Grass {
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
        background: ${() => Colors.Grass};

        &:hover {
          background: ${() => Colors["--hover-Grass"]};
        }

        &:active {
          background: ${() => Colors["--action-Grass"]};

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

  &.--Electric {
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
        background: ${() => Colors.Electric};

        &:hover {
          background: ${() => Colors["--hover-Electric"]};
        }

        &:active {
          background: ${() => Colors["--action-Electric"]};

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

  &.--Psychic {
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
        background: ${() => Colors.Psychic};

        &:hover {
          background: ${() => Colors["--hover-Psychic"]};
        }

        &:active {
          background: ${() => Colors["--action-Psychic"]};

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

  &.--Dark {
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
        background: ${() => Colors.Dark};

        &:hover {
          background: ${() => Colors["--hover-Dark"]};
        }

        &:active {
          background: ${() => Colors["--action-Dark"]};

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
