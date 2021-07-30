import React, { useRef, useState } from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { TieredMenu } from 'primereact/tieredmenu';
import classes from './App.module.css';

import { menuItems } from './data/menuItems';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const toastRef = useRef();

  const submitForm = () => {
    toastRef.current.show({ severity: 'info', summary: 'Welcome', detail: `${firstname} ${lastname}` });
  };

  return (
    <div className={classes.App}>
      <div className={`${classes.topBar} p-shadow-3 p-py-2 p-px-2`}>
        <Button icon="pi pi-bars" className="p-button-rounded" onClick={() => setActiveSidebar(true)} />
      </div>
      <Sidebar visible={activeSidebar} onHide={() => setActiveSidebar(false)}>
        <TieredMenu model={menuItems} />
      </Sidebar>
      <div className={`${classes.content} p-p-5`}>
        <Toast ref={toastRef} />
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="firstname">Firstname</label>
            <InputText id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="lastname">Lastname</label>
            <InputText id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
        </div>
        <Button label="Submit" icon="pi pi-check" onClick={submitForm} />
      </div>
    </div>
  );
}

export default App;
