import React from 'react';
import { PageWaterShop } from '../../components';

export interface WaterShopProps {
  className?: string,
};

const WaterShop: React.FC<WaterShopProps> = props => {
  return <PageWaterShop {...props} />;
}

export default WaterShop;
