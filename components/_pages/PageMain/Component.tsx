import React, { useCallback, useMemo } from 'react';
import uniqueId from 'lodash/uniqueId';
import Image from 'next/image';
import { PageMainStyles } from './Styles';
import { MainProps } from '../../../pages/Main';
import { useRouter } from 'next/dist/client/router';
import { SHOP_LOGOS } from '../..';
import { ShopTypes, SHOP_TYPES } from '../../../hooks/uiHooks/useGetShopColor';
import { motion } from 'framer-motion';

const PageMainComponentNoMemo: React.FC<MainProps> = props => {
  const { className } = props;
  const router = useRouter();
  const signupClassName = useMemo(() => `page-sign-up ${className}`, []);

  const handleOnClickShopButton = useCallback((shopType: ShopTypes) => {
    router.push(`${shopType}Shop`);
  }, [router]);

  const shopTypeHoverVariant = {
    scale: 1.5,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  };

  const shopTypeTapVariant = {
    scale: 200,
    transition: {
      duration: 8,
      ease: 'easeOut'
    }
  };

  return (
    <PageMainStyles {...props} className={signupClassName}>
      <title>Pokémon Shop - Main</title>
      <div className="main-content">
        <span className='main-title'>Pokémon Shop</span>
        <span className='main-subtitle'>Select your favorite type!</span>
        <div className="shop-types-navigator">
          {SHOP_TYPES?.map((shopType) => {
            const onClickShopType = () => handleOnClickShopButton(shopType);
            const key = uniqueId();
            const shopTitle = `${shopType} Shop`;
            return (
              <motion.div
                key={key}
                layout
                whileHover={shopTypeHoverVariant}
                whileTap={shopTypeTapVariant}
                onClick={onClickShopType}
                className={`shop-type --${shopType}`}
                title={shopTitle}
              >
                <span className='shop-title'>{shopTitle}</span>
                <Image className='shop-logo' src={SHOP_LOGOS[shopType]} width={48} height={48} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageMainStyles>
  )
};
''
const propsAreEqual = (prevProps: MainProps, nextProps: MainProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageMainComponent = React.memo(PageMainComponentNoMemo, propsAreEqual);
