import React from 'react';
import { PageGrassShop } from '../../components';

export interface GrassShopProps {
  className?: string,
};

const GrassShop: React.FC<GrassShopProps> = props => {
  return <PageGrassShop {...props} />;
}

export default GrassShop;
