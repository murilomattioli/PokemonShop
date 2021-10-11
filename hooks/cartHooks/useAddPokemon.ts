import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import cartHooks from ".";
import { PokemonProps } from "../../components/PokemonCard/Component";
import { ShopTypes } from "../uiHooks/useGetShopColor";
import { CartType } from "./types";
import { LOCAL_STORAGE_CART_KEY } from "./types/LocalStorageCartKey";

type ReturnProps = [(pokemon: PokemonProps, shopType: ShopTypes) => Promise<CartType>]

export default (): ReturnProps => {
  const [getCart] = cartHooks.useGetCart();
  const [reloadCart] = cartHooks.useReloadCart();
  const router = useRouter();

  
  const useAddPokemon = useCallback((pokemon: PokemonProps, shopType: ShopTypes): Promise<CartType> => {
    return new Promise(async (resolve, reject) => {
      const isValidPokemon = (
        pokemon?.id > 0 &&
        pokemon?.name?.length > 0 &&
        pokemon?.price > 0 &&
        pokemon?.type === shopType
      );
      if (isValidPokemon) {
        let newCart: CartType = [];
        let hasAdded: boolean = false;

        getCart(shopType).then((oldCart) => {
          for (const pokemonCart of oldCart) {
            if (pokemonCart.id === pokemon.id) {
              const amount = pokemonCart.amount + 1;
              newCart.push({ ...pokemonCart, amount });
              hasAdded = true;
            } else {
              newCart.push(pokemonCart);
            }
          }
        });

        setTimeout(() => {
          if (!hasAdded) {
            newCart.push({ ...pokemon, amount: 1 });
          }

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

  return [useAddPokemon];
};
