import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import { PokemonCardProps } from '.';
import { Button, formatPrice } from '..';
import cartHooks from '../../hooks/cartHooks';
import pokemonHooks from '../../hooks/pokemonHooks';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';
import { PokemonCardStyles } from './Styles';

export type PokemonProps = {
  id: number,
  name: string,
  price: number;
  type: ShopTypes;
}

const PokemonCardComponentNoMemo: React.FC<PokemonCardProps> = (props) => {
  const {
    className,
    children,
    ...pokemonProps
  } = props;
  const [addToCart] = cartHooks.useAddPokemon();
  const [pokemon] = useState<PokemonProps>(pokemonProps);
  const [getPokemonImage] = pokemonHooks.useGetPokemonImage();
  const pokemonCardClassName = useMemo(() => `pokemon-creator${className ? ` ${className}` : ''}${pokemonProps.type ? ` --${pokemonProps.type}` : ''}`, [className, pokemonProps.type]);
  const pokemonImage = useMemo(() => getPokemonImage(pokemon.id), [pokemon.id]);
  const pokemonPrice = useMemo(() => formatPrice(pokemon.price), [pokemon.price]);
  const pokemonOldPrice = useMemo(() => formatPrice(pokemon.price * 1.22), [pokemon.price]);

  const handleAddCart = useCallback(() => {
    addToCart(pokemon, pokemon.type);
  }, [addToCart, pokemon]);

  return (
    //@ts-ignore
    <PokemonCardStyles className={pokemonCardClassName}>
      <div className='pokemon-card-content'>
        <div className="image-wrapper">
          <Image
            src={pokemonImage}
            width={200}
            height={200}
            layout='fixed'
          />
        </div>
        <div className="info-wrapper">
          <div className="name-wrapper">
            <span>{pokemon.name}</span>
          </div>
          <div className="price-wrapper">
            <span className='old-price'>{pokemonOldPrice}</span>
            <span className='price'>{pokemonPrice}</span>
          </div>
        </div>
        <div className="add-button">
          <Button
            text='ADD TO CART'
            height={56}
            fillColor={pokemon.type}
            onClick={handleAddCart}
          />
        </div>
      </div>
    </PokemonCardStyles>
  );
}

const propsAreEqual = (prevProps: PokemonCardProps, nextProps: PokemonCardProps): boolean => (
  prevProps.className === nextProps.className &&
  prevProps.id === nextProps.id &&
  prevProps.name === nextProps.name &&
  prevProps.type === nextProps.type &&
  prevProps.price === nextProps.price
);

export const PokemonCardComponent = React.memo(PokemonCardComponentNoMemo, propsAreEqual);
