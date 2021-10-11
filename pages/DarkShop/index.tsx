import React from 'react';
import { PageDarkShop } from '../../components';

export interface DarkShopProps {
  className?: string,
};

const DarkShop: React.FC<DarkShopProps> = props => {
  return <PageDarkShop {...props} />;
}

export default DarkShop;
