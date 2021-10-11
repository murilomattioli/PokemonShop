import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { formatPrice } from '.';
import { CartStyles } from './Styles';
import { Button, ModalCustom } from '..';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';
import { CartType } from '../../hooks/cartHooks/types';
import cartHooks from '../../hooks/cartHooks';
import { useSelector } from 'react-redux';
import { InitialStateProps } from '../../redux/types';
import pokemonHooks from '../../hooks/pokemonHooks';

export interface CartProperties {
  className?: string;
  shopType: ShopTypes;
  maxWidth?: number;
  onFinishPurchase?: (totalCashBack: string) => void;
};

const CartComponentNoMemo: React.FC<CartProperties> = (props) => {
  const {
    className,
    shopType,
    onFinishPurchase = () => { },
  } = props;
  const [cart, setCart] = useState<CartType>([]);
  const reloadCart = useSelector((state: InitialStateProps) => state.canReloadCart);
  const [getCart] = cartHooks.useGetCart();
  const isEmptyCart = useMemo((): boolean => !(cart?.length > 0), [cart]);
  const [clearCart] = cartHooks.useClearCart();
  const [updateAmount] = cartHooks.useUpdatePokemonAmount();
  const [getPokemonImage] = pokemonHooks.useGetPokemonImage();

  const cartClassName = useMemo(() => `cart${className ? ' ' + className : ''}${shopType ? ' ' + shopType : ''}`, [className, shopType]);

  const labelTotalItems = useMemo(() => `${cart.length} Pokémon`, []);

  const totalPrice = useMemo((): { string: string, number: number } => {
    let total = 0;
    for (const pokemon of cart) {
      total += (pokemon.amount * pokemon?.price) || 0;
    }
    return { string: formatPrice(total), number: total };
  }, [cart]);

  const totalCashBack = useMemo(() => formatPrice((totalPrice?.number * .12)), [totalPrice]);

  const handleGetCart = useCallback(() => {
    getCart(shopType)
      .then((cartData) => {
        setCart(cartData);
      })
  }, [shopType]);
  useEffect(handleGetCart, [handleGetCart, reloadCart])

  const finishPurchase = useCallback(() => {
    setCart([]);
    clearCart(shopType);
  }, [shopType])

  const handleFinishPurchase = useCallback(() => {
    finishPurchase();
    onFinishPurchase(totalCashBack);
  }, [finishPurchase, onFinishPurchase, totalCashBack]);

  return (
    //@ts-ignore
    <CartStyles {...props} className={cartClassName}>
      <div className='cart-content'>
        <div className='cart-title'>
          <span className='title'>Your Cart</span>
          <span>{labelTotalItems}</span>
        </div>
        <div className='cart-list'>
          {!isEmptyCart && cart.map((pokemon) => {
            const { id, name, price, amount, type } = pokemon;
            const formatedPrice = formatPrice(price);
            const src = getPokemonImage(id);
            const increaseDisabled = amount >= 99;
            const handleIncrease = () => updateAmount(pokemon, '+', type);
            const handleDecrease = () => updateAmount(pokemon, '-', type);
            return (
              <div key={id} className='cart-item'>
                <div className="cart-item-content">
                  <div className="cart-image">
                    <Image
                      src={src}
                      width={72}
                      height={72}
                      layout='fixed'
                    />
                  </div>
                  <div className="cart-item-title">
                    <span className='name'>{name}</span>
                    <span className='price'>{formatedPrice}</span>
                  </div>
                  <div className="cart-item-amount">
                    <Button
                      text='+'
                      width={10}
                      height={10}
                      fillColor='transparent'
                      disabled={increaseDisabled}
                      onClick={handleIncrease}
                    />
                    <span className='amount-text'>{`${amount}x`}</span>
                    <Button
                      text='-'
                      width={10}
                      height={10}
                      fillColor='transparent'
                      onClick={handleDecrease}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {isEmptyCart && (
            <div className='empty-cart'>
              <span className='title'>Your cart is empty.</span>
            </div>
          )}
        </div>
        {!isEmptyCart && (
          <div className='total-price-wrapper'>
            <span className='total-price-label'>Total:</span>
            <span className='total-price'>{totalPrice.string}</span>
          </div>
        )}
        <div>
          <Button
            text='Finish'
            height={50}
            fillColor={shopType}
            textColor='white'
            disabled={isEmptyCart}
            onClick={handleFinishPurchase}
          />
        </div>
      </div>
    </CartStyles >
  );
}

export const CartComponent = React.memo(CartComponentNoMemo);
