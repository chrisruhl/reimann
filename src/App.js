import { Route, Routes } from 'react-router-dom';
import Index from './components/Index'
import CustomerList from './components/CustomerList'
import './App.css';
import { DateUpdate } from './components/DateUpdate';
import {CustomerProvider,} from './context/customers.context'


function App() {
  return (
    <div className="App">
      <CustomerProvider>
       <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/customer-list" element={<CustomerList />}/>
         <Route path="/DateUpdate" element={<DateUpdate />} />
       </Routes>
      </CustomerProvider>
    </div>
  );
}

export default App;
