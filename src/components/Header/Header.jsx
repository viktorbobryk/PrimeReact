import React from 'react';

import { Button } from 'primereact/button';
import classes from './HeaderComponent.module.css';

// eslint-disable-next-line react/prop-types
const Header = ({ onclick }) => (
  <div className={`${classes.Header} p-shadow-3 p-py-2 p-px-2`}>
    <Button icon="pi pi-bars" className="p-button-rounded" onClick={() => onclick(true)} />
    <h1>Prime React App</h1>
  </div>
);

export default Header;
