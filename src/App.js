import './App.css';

import { Grid, Row, Column, DatePicker, DatePickerInput } from '@carbon/react';

import {TopRecords} from './components/TopRecords.js'
import {DetailRecords} from './components/DetailRecords.js'
import SListInput from './components/SListInput';

function App() {
  const handleDateChange = (e) => {console.log("HandleDateChange!"); console.dir(e)}
  return (
    <div className="App">
      <div style={{display:"none"}} id="date_menu_div">
        <DatePicker onChange={(e) => handleDateChange(e)}
                       datePickerType="single" >
  <DatePickerInput
    placeholder="dd/mm/yyyy"
    id="date-picker-8"
    labelText="minDate example"
    
  />
</DatePicker></div>
      <SListInput />
    </div>
  );
}

export default App;
