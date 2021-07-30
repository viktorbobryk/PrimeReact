import React from 'react';

import { Sidebar } from 'primereact/sidebar';
import MenuComponent from '../Menu/MenuComponent';

// eslint-disable-next-line react/prop-types
const SidebarComponent = ({ visible, onclick }) => (
  <>
    <Sidebar visible={visible} onHide={() => onclick(false)}>
      <MenuComponent />
    </Sidebar>
  </>
);
export default SidebarComponent;
