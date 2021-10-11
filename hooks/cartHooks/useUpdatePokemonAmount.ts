import uniqueId from "lodash/uniqueId";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import cartHooks from ".";
import { PokemonProps } from "../../components/PokemonCard/Component";
import { CartActionType } from "../../redux/types";
import { ShopTypes } from "../uiHooks/useGetShopColor";
import { CartType } from "./types";
import { LOCAL_STORAGE_CART_KEY } from "./types/LocalStorageCartKey";

type ReturnProps = [(pokemon: PokemonProps, operator: '+' | '-', shopType: ShopTypes) => Promise<CartType>]

export default (): ReturnProps => {
  const [getCart] = cartHooks.useGetCart();
  const [reloadCart] = cartHooks.useReloadCart();
  const router = useRouter();
  const dispatch = useDispatch();

  const useUpdatePokemonAmount = useCallback((pokemon: PokemonProps, operator: '+' | '-', shopType: ShopTypes): Promise<CartType> => {
    return new Promise(async (resolve, reject) => {
      const isValidPokemon = (
        pokemon?.id > 0 &&
        pokemon?.name?.length > 0 &&
        pokemon?.price > 0 &&
        pokemon?.type === shopType
      );
      if (isValidPokemon) {
        let newCart: CartType = [];

        getCart(shopType).then((oldCart) => {
          for (const pokemonCart of oldCart) {
            if (pokemonCart.id === pokemon.id) {
              const amount = operator === '+' ? pokemonCart.amount + 1 : pokemonCart.amount - 1;
              if (amount >= 1) {
                newCart.push({ ...pokemonCart, amount });
              }
            } else {
              newCart.push(pokemonCart);
            }
          }
        });

        setTimeout(() => {
          const localStorageKey = `${LOCAL_STORAGE_CART_KEY}${shopType}`;
          const localStoargeNewValue = JSON.stringify(newCart);
          localStorage.setItem(localStorageKey, localStoargeNewValue);
          reloadCart();
          resolve(newCart);
        }, 50);
      } else {
        reject(Error('Invalid Pokémon.'));
      }
    });
  }, [getCart, router, reloadCart]);

  return [useUpdatePokemonAmount];
};
