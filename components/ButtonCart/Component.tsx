import React, { useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonCartStyles } from './Styles';
import { Button } from '..';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';

export type ButtonCartProperties = {
  className?: string;
  theme?: ShopTypes;
  count?: number,
  onClick?: () => void;
};

const ButtonCartComponentNoMemo: React.FC<ButtonCartProperties> = (props) => {
  const {
    className,
    theme,
    count,
    onClick = () => { },
  } = props;
  const cartButtonClassName = useMemo(() => `cart-button-component${className ? ' ' + className : ''}${theme ? ' --' + theme : ''}`, [className, theme]);
  const showBadgeCount = useMemo((): boolean => !!count, [count]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick();
    }
    e.preventDefault();
  }, [onClick]);

  return (
    //@ts-ignore
    <ButtonCartStyles className={cartButtonClassName} onClick={handleClick} title='Your cart'>
      <div className='button-cart-content'>
        <Button
          icon='faShoppingCart'
          radius='circle'
          iconSize={2}
          fillColor='transparent'
          iconColor='white'
        />
        {showBadgeCount && (
          <span className='badge-count'>{count}</span>
        )}
      </div>
    </ButtonCartStyles>
  );
}

export const ButtonCartComponent = React.memo(ButtonCartComponentNoMemo);
