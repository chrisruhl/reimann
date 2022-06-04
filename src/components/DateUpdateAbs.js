import {Button, DatePicker, DatePickerInput} from '@carbon/react';
import { Add16 } from '@carbon/icons-react';


const show_date_div = (e) => {
  console.log("Show Date Menu clicked with!:");
  console.dir(e);
  var id = "date_menu_div";
  var x = parseInt(e.clientX)
  var y = parseInt(e.clientY)

  document.getElementById(id).style.position = "absolute"
  document.getElementById(id).style.top = y.toString() + "px";
  document.getElementById(id).style.left = x.toString() + "px"
  document.getElementById(id).style.width = "100px"
  
  var dType = "flex"
  if(document.getElementById(id).style.display === dType){
    document.getElementById(id).style.display = "none"
  }else{
    document.getElementById(id).style.display = dType;
    document.getElementById(id).style.zIndex = "10";

  }
}

const DateUpdateAbs = (props) => {
   
   let cell_div
   let [my_id, my_name] = props.cellinfo.split(":")

   if(my_name === 'target_date' && my_id === '49'){
     cell_div = <div><Add16 onClick={(e) => show_date_div(e)}></Add16></div>
   }else{
     cell_div = 'yup.'
   }
   return (
   cell_div
) 
}

export default DateUpdateAbs;