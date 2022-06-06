import {DatePicker, DatePickerInput} from '@carbon/react';

function DateUpdate(props){
   const handleChange = (e) => {
     console.log("DateUpdate: handeChange()")
     console.log(e[0])}
   return (
<DatePicker onChange={(e) => handleChange(e)}
  datePickerType="single">
  <DatePickerInput
    placeholder="dd/mm/yyyy"
    id="date-picker-8"
    labelText="minDate example"
  />
  {props.children}
</DatePicker>
)
}

export {DateUpdate}