import { useCallback } from "react";
import { ShopTypes } from "../uiHooks/useGetShopColor";
import { CartType } from "./types";
import { LOCAL_STORAGE_CART_KEY } from "./types/LocalStorageCartKey";

type ReturnProps = [(shopType: ShopTypes) => Promise<CartType>];

export default (): ReturnProps => {
  const useGetCart = useCallback((shopType: ShopTypes): Promise<CartType> => {
    return new Promise((resolve, reject) => {
      const localStorageKey = `${LOCAL_STORAGE_CART_KEY}${shopType}`;
      var cart: CartType = [];
      if (localStorage?.getItem(localStorageKey)) {
        cart = JSON.parse(localStorage?.getItem(localStorageKey) || '[]');
      } else {
        reject();
      }

      setTimeout(() => {
        resolve(cart);
      }, 50);
    })
  }, []);

  return [useGetCart];
};
