import './App.css';
import SListInput from './components/SListInput';


import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';

import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
function App() {
  const handleDateChange = (e) => { console.log("HandleDateChange!"); console.dir(e) }
  return (


    <>
      <Header aria-label="IBM Platform Name">

        <HeaderName href="#" prefix="IBM">
          Spectrum Protect
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={handleDateChange('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={handleDateChange('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={handleDateChange('app-switcher click')}
            tooltipAlignment="end">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar >
      </Header >
      <SListInput />
    </>


  );
}

export default App;
