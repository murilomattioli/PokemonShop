import React, { useEffect, useMemo } from 'react';
import { PageSignupStyles } from './Styles';
import { ModalSignup } from '../..';
import userHooks from '../../../hooks/userHooks';
import { SignupProps } from '../../../pages/Signup';

const PageSignupComponentNoMemo: React.FC<SignupProps> = props => {
  const { className } = props;
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();
  const signupClassName = useMemo(() => `page-sign-up ${className}`, []);

  useEffect(() => {
    authUserWithRedirect('Main');
  }, []);

  return (
    <PageSignupStyles {...props} className={signupClassName}>
      <title>Pokemon Shop - Signup</title>
      <ModalSignup />
    </PageSignupStyles>
  )
};
''
const propsAreEqual = (prevProps: SignupProps, nextProps: SignupProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageSignupComponent = React.memo(PageSignupComponentNoMemo, propsAreEqual);
