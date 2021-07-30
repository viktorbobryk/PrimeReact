import React, { useState } from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import MenuComponent from './components/Menu/MenuComponent';
import SidebarComponent from './components/Sidebar/SidebarComponent';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ChartComponent from './components/Chart/ChartComponent';
import classes from './App.module.css';
import { months, options } from './data/months';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);

  return (
    <div className={classes.App}>
      <Header onclick={setActiveSidebar} />
      <SidebarComponent visible={activeSidebar} onclick={setActiveSidebar}>
        <MenuComponent />
      </SidebarComponent>
      <div className={`${classes.content} p-p-5`}>
        <Form />
        <ChartComponent data={months} options={options} />
      </div>
    </div>
  );
}

export default App;
