import React from 'react';
import { PageElectricShop } from '../../components';

export interface ElectricShopProps {
  className?: string,
};

const ElectricShop: React.FC<ElectricShopProps> = props => {
  return <PageElectricShop {...props} />;
}

export default ElectricShop;
