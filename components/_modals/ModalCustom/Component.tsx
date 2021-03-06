import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { ModalCustomProps } from '.';
import { ModalCustomStyles } from './Styles';

const ModalCustomComponentNoMemo: React.FC<ModalCustomProps> = (props) => {
  const {
    className,
    component,
    style,
    onClickClose = () => { },
  } = props;
  const modalCustomClassName = useMemo(() => `modal-custom${className ? ` ${className}` : ''}`, [className]);

  return (
    //@ts-ignore
    <ModalCustomStyles className={modalCustomClassName} style={style}>
      <motion.div
        className="background-modal"
        onClick={onClickClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .2 }}
      />
      <motion.div
        className='content'
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      >
        {component}
      </motion.div>
    </ModalCustomStyles>
  );
}

const propsAreEqual = (prevProps: ModalCustomProps, nextProps: ModalCustomProps): boolean => (
  prevProps.className === nextProps.className &&
  prevProps.component === nextProps.component &&
  prevProps.onClickClose === nextProps.onClickClose &&
  prevProps.style === nextProps.style &&
  prevProps.showExit === nextProps.showExit
);

export const ModalCustomComponent = React.memo(ModalCustomComponentNoMemo, propsAreEqual);
