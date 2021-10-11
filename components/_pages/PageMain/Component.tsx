import React, { useCallback, useMemo } from 'react';
import { PageMainStyles } from './Styles';
import { MainProps } from '../../../pages/Main';
import { Button } from '../..';
import { useRouter } from 'next/dist/client/router';

const PageMainComponentNoMemo: React.FC<MainProps> = props => {
  const { className } = props;
  const router = useRouter();
  const signupClassName = useMemo(() => `page-sign-up ${className}`, []);

  const handleOnClickShopButton = useCallback((store: 'Water') => {
    router.push(store);
  }, [router]);

  const handleClickWaterShop = useCallback(() => {
    handleOnClickShopButton('WaterShop');
  }, [handleOnClickShopButton]);


  return (
    <PageMainStyles {...props} className={signupClassName}>
      <title>Pokemon Shop - Main</title>
      <Button text='Water Shop' onClick={handleClickWaterShop} />
    </PageMainStyles>
  )
};
''
const propsAreEqual = (prevProps: MainProps, nextProps: MainProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageMainComponent = React.memo(PageMainComponentNoMemo, propsAreEqual);
