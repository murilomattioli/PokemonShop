import React, { ButtonHTMLAttributes, useCallback, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BUTTON_ICONS } from '.';
import { ButtonStyles } from './Styles';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';

export type ButtonIcons = 'edit' | 'trash' | 'signOutAlt' | 'faShoppingCart' | 'faSearch' | 'faChevronLeft';

export type ButtonProperties = {
  text?: string;
  icon?: ButtonIcons;
  height?: number;
  width?: number;
  className?: string;
  disabled?: boolean;
  fillColor?: 'black' | 'white' | 'transparent' | ShopTypes;
  iconColor?: 'black' | 'white' | 'transparent' | ShopTypes;
  textColor?: 'black' | 'white' | 'transparent' | ShopTypes;
  iconSize?: .8 | 1 | 2 | 3 | 4,
  shadow?: 'dark' | 'light',
  radius?: 'circle';
  onClick?: (value?: string) => void
} & React.HTMLAttributes<HTMLButtonElement>;

const ButtonComponentNoMemo: React.FC<ButtonProperties> = (props) => {
  const {
    className,
    text,
    icon,
    disabled,
    fillColor = 'black',
    iconColor = 'white',
    shadow,
    radius,
    width,
    onSubmit = () => { },
    onClick,
    ...buttonProperties
  } = props;
  const buttonRef: React.RefObject<HTMLButtonElement> = useRef(null);
  const showIcon = useMemo((): boolean => icon !== undefined, [icon]);
  const iconName = useMemo(() => {
    if (icon) {
      return BUTTON_ICONS?.[icon];
    } else return '';
  }, [icon]);
  const showText = useMemo((): boolean => text !== undefined && !showIcon, [text, showIcon]);
  const buttonClassName = useMemo(() => `button${className ? ' ' + className : ''}${showIcon ? ' --btn-icon' : ''}${disabled ? ' --btn-disabled' : ''}${radius === 'circle' ? ' --btn-circle' : ''}${shadow ? ` --btn-shadow-${shadow}` : ''}`, [className, showIcon, disabled, radius, shadow]);

  const handleClickButtonElement = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick();
    }
    e.preventDefault();
  }, [onClick]);

  const handleOnClick = useCallback(() => {
    buttonRef?.current?.click();
  }, [buttonRef]);

  return (
    //@ts-ignore
    <ButtonStyles {...props} className={buttonClassName} onClick={handleOnClick}>
      <div className='btn-content'>
        {showIcon && iconName && (
          <FontAwesomeIcon className='btn-icon' icon={iconName} />
        )}
        {showText && (
          <div className='btn-text-wrapper'>
            <span className='text'>{text}</span>
          </div>
        )}
        <button
          {...buttonProperties}
          ref={buttonRef}
          className='button'
          onClick={handleClickButtonElement}
          onSubmit={onSubmit}
          hidden
        />
      </div>
    </ButtonStyles>
  );
}

export const ButtonComponent = React.memo(ButtonComponentNoMemo);
