import { ShopTypes } from "../../../hooks/uiHooks/useGetShopColor";

export interface PokemonListProps {
  className?: string;
  type: ShopTypes;
  query?: string;
  clearQuery?: () => void;
}
