import React, { useCallback, useMemo, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { PageDarkStyles } from './Styles';
import { MainProps } from '../../../pages/Main';
import { Cart, Header, ModalCustom, PokemonList } from '../..';
import { AnimatePresence, motion } from 'framer-motion';

const PageDarkShopComponentNoMemo: React.FC<MainProps> = props => {
  const { className } = props;
  const [updateHeaderCount, setUpdateHeaderCount] = useState<string>();
  const [showCart, setShowCart] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [totalCashBack, setTotalCashBack] = useState<string>('');
  const [showModalPurchase, setShowModalPurchase] = useState<boolean>(false);
  const pagerFireShopClassName = useMemo(() => `page-dark-shop${className ? ' ' + className : ''}`, []);

  const handleToggleCart = useCallback((params?: any) => {
    const hideOutside = params?.hideOutside;
    if (hideOutside) {
      setShowCart(false);
    } else {
      setShowCart(!showCart)
    }
  }, [showCart]);

  const clearQuery = () => setQuery('');

  const handleFinishPurchase = useCallback((cashBack: string) => {
    setShowModalPurchase(true);
    setTotalCashBack(cashBack);
    setUpdateHeaderCount(uniqueId());
  }, []);

  const handleCloseModalPurchase = () => setShowModalPurchase(false);

  return (
    <PageDarkStyles {...props} className={pagerFireShopClassName}>
      <title>Dark Shop - Main</title>
      <div className='dark-shop-container'>
        <Header
          shopType='Dark'
          onToggleCartOutside={handleToggleCart}
          onChangeQuery={setQuery}
          resetCartCount={updateHeaderCount}
          onFinishPurchase={handleFinishPurchase}
        />
        <AnimatePresence>
          <div className='dark-shop-content'>
            <div className='list-wrapper'>
              <PokemonList type='Dark' query={query} clearQuery={clearQuery} />
            </div>
            <div className='cart-section'>
              {showCart && (
                <motion.div
                  layout
                  initial={{ translateX: '200%' }}
                  animate={{ translateX: 0 }}
                  exit={{ translateX: '200%' }}
                  transition={{ duration: .2 }}
                  className='cart-wrapper'
                >
                  <Cart
                    shopType='Dark'
                    onFinishPurchase={handleFinishPurchase}
                  />
                </motion.div>
              )}
            </div>
          </div>
          {showModalPurchase && (
            <ModalCustom
              onClickClose={handleCloseModalPurchase}
              component={
                <div className='purchase-feedback'>
                  <span className='title'>Thanks!</span>
                  <span className='message'>You won back</span>
                  <span className='message-secondary'>{totalCashBack}</span>
                </div>
              }
            />
          )}
        </AnimatePresence>
      </div>
    </PageDarkStyles>
  )
};
''
const propsAreEqual = (prevProps: MainProps, nextProps: MainProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageDarkShopComponent = React.memo(PageDarkShopComponentNoMemo, propsAreEqual);
