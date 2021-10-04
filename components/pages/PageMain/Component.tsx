import React, { useEffect, useMemo } from 'react';
import { PageMainStyles } from './Styles';
import userHooks from '../../../hooks/userHooks';
import { MainProps } from '../../../pages/Main';

const PageMainComponentNoMemo: React.FC<MainProps> = props => {
  const { className } = props;
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();
  const signupClassName = useMemo(() => `page-sign-up ${className}`, []);

  useEffect(() => {
    authUserWithRedirect('Main');
  }, []);

  return (
    <PageMainStyles {...props} className={signupClassName}>
      <title>Pokemon Shop - Main</title>
      <ModalMain />
    </PageMainStyles>
  )
};
''
const propsAreEqual = (prevProps: MainProps, nextProps: MainProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageMainComponent = React.memo(PageMainComponentNoMemo, propsAreEqual);
