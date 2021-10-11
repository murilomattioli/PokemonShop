import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { ButtonIcons } from "./Component";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

export const BUTTON_HEIGHT = { 
  default: 32,
  icon: 32,
};

export const BUTTON_WIDTH = { 
  default: 112,
  icon: 32,
};

export const BASE_SIZE_ICON_BUTTON = 8;

export const BUTTON_ICONS: Record<ButtonIcons, IconDefinition> = {
  'edit': faEdit,
  'trash': faTrash,
  'signOutAlt': faSignOutAlt,
  'faShoppingCart': faShoppingCart,
  'faSearch': faSearch,
  'faChevronLeft': faChevronLeft,
};
