import {useContext} from 'react'
import './CustomerStructuredList.scss'

import {CustomerContext} from '../context/customers.context';

import {StructuredListWrapper, 
        StructuredListHead, 
        StructuredListRow, 
        StructuredListCell,
        StructuredListBody} from "@carbon/react";

function CustomerStructuredList(){ 
    let {custList, setCustomers, } = useContext(CustomerContext);


    const setSelectedIndex = (custList, newIndex) => {

    let n = {selected: newIndex, theList: custList.theList}
    
    setCustomers(n)
    return true
  }

    const writeRow = (value, index) => {
      return(
    <StructuredListRow className={value.color_class} key={index}>
       <StructuredListCell onClick={() => setSelectedIndex(custList, index)} noWrap>{value.customer_name}</StructuredListCell>
     </StructuredListRow>
      )
    }
    return (
<StructuredListWrapper isCondensed={true} selection>
  <StructuredListHead>
    <StructuredListRow head>
      <StructuredListCell head>Customers</StructuredListCell>
    </StructuredListRow>
  </StructuredListHead>
   <StructuredListBody>
     {custList.theList.map((value, index) => {return writeRow(value, index)})}
   </StructuredListBody>
 </StructuredListWrapper>
)}

export default CustomerStructuredList;