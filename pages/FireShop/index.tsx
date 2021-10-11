import React from 'react';
import { PageFireShop } from '../../components';

export interface FireShopProps {
  className?: string,
};

const FireShop: React.FC<FireShopProps> = props => {
  return <PageFireShop {...props} />;
}

export default FireShop;
