import React from 'react';
import { PagePsychicShop } from '../../components';

export interface PsychicShopProps {
  className?: string,
};

const PsychicShop: React.FC<PsychicShopProps> = props => {
  return <PagePsychicShop {...props} />;
}

export default PsychicShop;
