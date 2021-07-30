import React from 'react';

import { TieredMenu } from 'primereact/tieredmenu';
import { menuItems } from '../../data/menuItems';

const MenuComponent = () => (
  <>
    <TieredMenu model={menuItems} />
  </>
);

export default MenuComponent;
