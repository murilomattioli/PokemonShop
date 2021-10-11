import React, { useCallback, useEffect, useMemo, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { PokemonListProps } from '.';
import { Button, PokemonCard } from '..';
import { PokemonListStyles } from './Styles';
import { motion } from 'framer-motion';
import { PokemonProps } from '../PokemonCard/Component';
import pokemonHooks from '../../hooks/pokemonHooks';

const PokemonListComponentNoMemo: React.FC<PokemonListProps> = (props) => {
  const {
    className,
    type,
    query,
    clearQuery = () => { },
  } = props;
  const [pokemonList, setPokemonList] = useState<Array<PokemonProps>>([]);
  const [getPokemonList] = pokemonHooks.useGetPokemon();
  const PokemonListClassName = useMemo(() => `pokemon-list ${className}`, [className]);

  const handleGetPokemons = useCallback(() => {
    getPokemonList(type).then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, [type, getPokemonList]);
  useEffect(handleGetPokemons, [handleGetPokemons]);

  const pokemon = useMemo((): Array<PokemonProps> => {
    if (query) {
      const pokemonWithQuery: Array<PokemonProps> = [];
      for (const pkm of pokemonList) {
        if (pkm.name.toLowerCase().includes(query.trimLeft().trimRight().toLowerCase())) {
          pokemonWithQuery.push(pkm);
        }
      }

      return pokemonWithQuery;
    } else return pokemonList;
  }, [pokemonList, query]);

  const noResults = useMemo(() => (query && !(pokemon.length > 0)), [query, pokemon]);
  const noResultsTitle = useMemo(() => `No results found for '${query?.trimLeft().trimRight()}'.`, [query]);

  return (
    //@ts-ignore
    <PokemonListStyles {...props} className={PokemonListClassName}>
      <div className='pokemon-list-content'>
        {!noResults && pokemon.map((pokemon) => {
          const key = uniqueId();
          return (
            <React.Fragment key={key}>
              <motion.div
                layout
                transition={{ duration: .2 }}
                className='pokemon-item'
              >
                <PokemonCard {...pokemon} />
              </motion.div>
            </React.Fragment>
          )
        })}
        {noResults && (
          <div className='no-results-content'>
            <span className="title">{noResultsTitle}</span>
          </div>
        )}
      </div>
    </PokemonListStyles>
  );
}

const propsAreEqual = (prevProps: PokemonListProps, nextProps: PokemonListProps): boolean => (
  prevProps.className === nextProps.className &&
  prevProps.type === nextProps.type &&
  prevProps.query === nextProps.query &&
  prevProps.clearQuery === nextProps.clearQuery
);

export const PokemonListComponent = React.memo(PokemonListComponentNoMemo, propsAreEqual);
