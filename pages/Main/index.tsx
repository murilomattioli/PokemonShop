import React from 'react';
import { PageMain } from '../../components';

export interface MainProps {
  className?: string,
};

const Main: React.FC<MainProps> = props => {
  return <PageMain {...props} />;
}

export default Main;
