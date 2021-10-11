import { useCallback } from "react";
import useServer from "../../actions/library/server";
import { PokemonProps } from "../../components/PokemonCard/Component";
import { ShopTypes } from "../uiHooks/useGetShopColor";

type ReturnProps = [(type: ShopTypes) => Promise<Array<PokemonProps>>];

const typeIds: Record<ShopTypes, number> = {
  Fire: 10,
  Water: 11,
  Grass: 12,
  Electric: 13,
  Psychic: 14,
  Dark: 17,
};

export default (): ReturnProps => {
  const [get] = useServer.useGet();

  const useGetPokemon = useCallback((type: ShopTypes): Promise<Array<PokemonProps>> => {
    return new Promise((resolve, reject) => {
      const typeId = typeIds[type];
      const url = `type/${typeId}`;
  
      get(url).then((response) => {
        //@ts-ignore
        const pokemonData: Array<{pokemon: {name: string, url: string}, slot: number}> = response?.data?.pokemon;

        var pokemonList: Array<PokemonProps> = [];
        for (const data of pokemonData) {
          const pokemon = data.pokemon;
          const id: number = Number(`${pokemon.url?.replace('https://pokeapi.co/api/v2/pokemon/', '')}`?.replace('/', ''));
          const price = (id < 50) ? id * 223 : (id < 100) ? id * 30 : id * 8;

          pokemonList.push({
            id,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            price,
            type,
          })
        }

        resolve(pokemonList);
      }).catch(reject);
    })
  }, []);

  return [useGetPokemon];
};
