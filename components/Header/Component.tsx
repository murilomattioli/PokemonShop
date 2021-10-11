import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonCart, Cart, ModalCustom, SearchInput, ShopLogo } from '..';
import cartHooks from '../../hooks/cartHooks';
import { CartType } from '../../hooks/cartHooks/types';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';
import { InitialStateProps } from '../../redux/types';
import { HeaderStyles } from './Styles';

export interface HeaderProperties {
  className?: string;
  shopType: ShopTypes;
  resetCartCount?: string;
  onToggleCartOutside?: (params?: any) => void;
  onShowCartModal?: (params?: any) => void;
  onChangeQuery?: (query: string) => void;
};

const HeaderComponentNoMemo: React.FC<HeaderProperties> = (props) => {
  const {
    className,
    shopType,
    resetCartCount,
    onToggleCartOutside = () => { },
    onShowCartModal = () => { },
    onChangeQuery = () => { },
  } = props;
  const [showModalCart, setShowModalCart] = useState<boolean>();
  const [cart, setCart] = useState<CartType>([]);
  const reloadCart = useSelector((state: InitialStateProps) => state.canReloadCart);
  const [getCart] = cartHooks.useGetCart();
  const headerClassName = useMemo(() => `header${className ? ' ' + className : ''}${shopType ? ' ' + shopType : ''}`, [className, shopType]);

  const handleGetCart = useCallback(() => {
    getCart(shopType)
      .then((cartData) => {
        setCart(cartData);
      })
  }, [shopType]);
  useEffect(handleGetCart, [handleGetCart, reloadCart])

  const totalAmount = useMemo(() => {
    var amount: number = 0;

    for (const pokemon of cart) {
      amount += pokemon.amount;
    }

    return amount;
  }, [cart])

  const handleResetCart = useCallback(() => {
    if (resetCartCount) {
      setCart([]);
    }
  }, [resetCartCount]);
  useEffect(handleResetCart, [handleResetCart]);

  const handleClickCart = useCallback(() => {
    const isMobile = window.innerWidth < 807;

    if (isMobile) {
      onToggleCartOutside({ hideOutside: true });
      setShowModalCart(!showModalCart);
    } else {
      onToggleCartOutside();
      setShowModalCart(false);
    }
  }, [onShowCartModal, onToggleCartOutside]);

  const handleCloseCart = () => {
    setShowModalCart(false)
  };

  return (
    //@ts-ignore
    <HeaderStyles className={headerClassName}>
      <div className='header-content'>
        <div className='header-controls'>
          <div className='header-control --singout'>
            <Button icon='signOutAlt' radius='circle' fillColor='transparent' iconColor='white' title='Signout' />
          </div>
          <div className='header-control --cart'>
            <ButtonCart theme={shopType} onClick={handleClickCart} count={totalAmount} />
          </div>
        </div>
        <div className="search-wrapper">
          <div className='logo-wrapper'>
            <ShopLogo shopType={shopType} />
          </div>
          <SearchInput placeholder='Search' color={shopType} onChangeValue={onChangeQuery} />
        </div>
      </div>
      {showModalCart && (
        <ModalCustom component={<Cart shopType={shopType} />} onClickClose={handleCloseCart} />
      )}
    </HeaderStyles >
  );
}

export const HeaderComponent = React.memo(HeaderComponentNoMemo);
