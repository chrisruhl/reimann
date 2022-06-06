import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Switcher, Search, Notification} from '@carbon/icons-react'
import {Content,
Header,
HeaderName,
HeaderGlobalAction,
HeaderGlobalBar,
} from '@carbon/react'

import Index from './components/Index'
import CustomerList from './components/CustomerList'
import MasterDetailPane from './components/MasterDetailPane'
import { DateUpdate } from './components/DateUpdate';
import DisplaySelected from './components/DisplaySelected'
import {CustomerProvider,} from './context/customers.context'


function App() {
  const action = (e) => {console.log(e)}
  return (
    <div>
      <CustomerProvider>

  <Header aria-label="IBM Platform Name">
  <HeaderName href="#" prefix="IBM">
    Spectrum Protect
  </HeaderName> <DisplaySelected />
  <HeaderGlobalBar>
    <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
      <Search />
    </HeaderGlobalAction>
     <HeaderGlobalAction
       aria-label="Notifications"
       onClick={action('notification click')}>
       <Notification />
     </HeaderGlobalAction>
     <HeaderGlobalAction
       aria-label="App Switcher"
       onClick={action('app-switcher click')}
       tooltipAlignment="end">
       <Switcher size={20} />
     </HeaderGlobalAction>
   </HeaderGlobalBar>
 </Header>
 <Content>
       <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/customer-list" element={<CustomerList />}/>
         <Route path="/DateUpdate" element={<DateUpdate />} />
         <Route path="/mdpane" element={<MasterDetailPane />} />
       </Routes>
</Content>
      </CustomerProvider>

    </div>
  );
}

export default App;
