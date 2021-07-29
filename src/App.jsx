import React, { useRef, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import logo from './primereact-logo.png';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import classes from './App.module.css';

function App() {
  const [text, setText] = useState('');
  const toastRef = useRef();

  const onButtonClick = () => {
    if (text) {
      toastRef.current.show({ severity: 'success', summary: 'Success Message', detail: text });
    } else {
      toastRef.current.show({ severity: 'error', summary: 'Error Message', detail: 'Value is required' });
    }
  };
  return (
    <div className={classes.App}>
      <Toast ref={toastRef} />
      <header className={classes.AppHeader}>
        <img className={classes.AppLogo} src={logo} alt="logo" />

        <span className="p-float-label">
          <InputText id="inputText" value={text} onChange={(e) => setText(e.target.value)} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="inputText" className="p-component">enter name</label>
        </span>
        <br />
        <Button type="button" label="Submit" icon="pi pi-check" onClick={onButtonClick} />
        {text}
      </header>
    </div>
  );
}

export default App;
