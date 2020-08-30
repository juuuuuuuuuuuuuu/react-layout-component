import React from 'react';
import { useSelector } from 'react-redux';
import { selectedMenu } from '../../store/main';

import Title from './Title';
import SubHeader from './SubHeader';
import MobileNavigation from './MobileNavigation';

function Header() {
  const data = useSelector(selectedMenu);

  return (
    <div id='header'>
      <Title data={data} />
      <SubHeader data={data} />
      <MobileNavigation />
    </div>
  );
}
export default Header;
