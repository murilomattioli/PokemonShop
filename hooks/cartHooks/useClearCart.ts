import uniqueId from "lodash/uniqueId";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import cartHooks from ".";
import { CartActionType } from "../../redux/types";
import { ShopTypes } from "../uiHooks/useGetShopColor";
import { LocalStorageCartKey } from "./types/LocalStorageCartKey";

type ReturnProps = [(shopType: ShopTypes) => Promise<boolean>];

export default (): ReturnProps => {
  const [reloadCart] = cartHooks.useReloadCart();

  const useClearCart = useCallback((shopType: ShopTypes): Promise<boolean> => new Promise((resolve) => {
    const cartKey: LocalStorageCartKey = 'cart';
    const localStorageKey = `${cartKey}${shopType}`;
    localStorage.setItem(localStorageKey, JSON.parse('[]'));
    reloadCart();
    resolve(true);
  }), [reloadCart]);

  return [useClearCart];
};
