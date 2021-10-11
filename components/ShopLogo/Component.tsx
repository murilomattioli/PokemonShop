import React, { useCallback, useMemo } from 'react';
import Image from 'next/image'
import { ShopLogoStyles } from './Styles';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';
import { useRouter } from 'next/dist/client/router';
import { LOGO_SIZE, SHOP_LOGOS } from '.';

export type ShopLogoProperties = {
  shopType: ShopTypes;
  className?: string;
};

const ShopLogoComponentNoMemo: React.FC<ShopLogoProperties> = (props) => {
  const {
    className,
    shopType,
  } = props;
  const router = useRouter();
  const shopLogoClassName = useMemo(() => `shop-logo-component${className ? ` ${className}` : ''}${shopType ? ` --${shopType}` : ''}`, [className, shopType]);
  const logoText = useMemo(() => `${shopType} Shop`, [shopType]);

  const imgLogo = useMemo(() => {
    return SHOP_LOGOS[shopType]
  }, [shopType]);

  const handleOnClick = useCallback(() => {
    if (shopType) {
      router.push(`${shopType}Shop`);
    }
  }, [shopType]);

  return (
    //@ts-ignore
    <ShopLogoStyles className={shopLogoClassName}>
      <div className='shop-logo-content' onClick={handleOnClick}>
        <Image className='shop-logo-img' src={imgLogo} height={LOGO_SIZE} width={LOGO_SIZE} layout='fixed' />
        <span className='shop-logo-text'>{logoText}</span>
      </div>
    </ShopLogoStyles>
  );
}

export const ShopLogoComponent = React.memo(ShopLogoComponentNoMemo);
