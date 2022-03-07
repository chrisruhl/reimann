import {DatePicker, DatePickerInput} from 'carbon-components-react';

function DateUpdate(props){
   return (
<DatePicker onChange={(e) => this.props.handleChange("tags", e)}
  datePickerType="single">
  <DatePickerInput
    placeholder="dd/mm/yyyy"
    id="date-picker-8"
    labelText="minDate example"
  />
</DatePicker>
)
}

export {DateUpdate}