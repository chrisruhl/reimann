import './App.css';
import SListInput from './components/SListInput';




import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
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
            {'search20'}
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={handleDateChange('notification click')}>
            {'notify20'}
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={handleDateChange('app-switcher click')}
            tooltipAlignment="end">
            {'hello.'}
          </HeaderGlobalAction>
        </HeaderGlobalBar >
      </Header >
      <SListInput />
    </>


  );
}

export default App;
