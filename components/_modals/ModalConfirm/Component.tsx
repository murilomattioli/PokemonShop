import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/dist/client/router';
import { motion } from 'framer-motion';
import { ModalConfirmStyles } from './Styles';
import { CANCEL_TEXT_DEFAULT, CONFIRM_TEXT_DEFAULT, ModalConfirmProps } from '.';
import { Button } from '../..';

const ModalConfirmComponentNoMemo: React.FC<ModalConfirmProps> = (props) => {
  const {
    className,
    title,
    cancelText = CANCEL_TEXT_DEFAULT,
    confirmText = CONFIRM_TEXT_DEFAULT,
    onConfirm = () => { },
  } = props;
  const router = useRouter();
  const modalConfirmClassName = useMemo(() => `post-creator ${className}`, []);

  const handleOnCancel = useCallback(() => {
    router.back();
  }, [router]);

  const handleOnConfirm = useCallback(() => {
    new Promise((resolve) => {
      onConfirm();
      resolve(null);
    })
      .then(() => router.back());
  }, [onConfirm, router]);


  return (
    //@ts-ignore
    <ModalConfirmStyles className={modalConfirmClassName}>
      <motion.div
        className='content'
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      >
        <div className='title-wrapper'>
          <span className='title'>{title}</span>
        </div>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button
              text={cancelText}
              onClick={handleOnCancel}
              fillColor='white'
            />
          </div>
          <div className='button-wrapper'>
            <Button
              text={confirmText}
              onClick={handleOnConfirm}
              fillColor='white'
            />
          </div>
        </div>
      </motion.div>
    </ModalConfirmStyles>
  );
}

const propsAreEqual = (prevProps: ModalConfirmProps, nextProps: ModalConfirmProps): boolean => (
  prevProps.className === nextProps.className
);

export const ModalConfirmComponent = React.memo(ModalConfirmComponentNoMemo, propsAreEqual);
