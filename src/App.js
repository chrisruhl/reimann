import { Route, Routes } from 'react-router-dom';
import './App.css';

import Index from './components/Index'
import CustomerList from './components/CustomerList'
import MasterDetailPane from './components/MasterDetailPane'
import { DateUpdate } from './components/DateUpdate';
import {CustomerProvider,} from './context/customers.context'


function App() {
  return (
    <div>
      <CustomerProvider>
       <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/customer-list" element={<CustomerList />}/>
         <Route path="/DateUpdate" element={<DateUpdate />} />
         <Route path="/mdpane" element={<MasterDetailPane />} />
       </Routes>
      </CustomerProvider>
    </div>
  );
}

export default App;
