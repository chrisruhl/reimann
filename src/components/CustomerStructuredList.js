import {useContext} from 'react'
import './CustomerStructuredList.scss'

import {CustomerContext} from '../context/customers.context';

import {StructuredListWrapper, 
        StructuredListHead, 
        StructuredListRow, 
        StructuredListCell,
        StructuredListBody} from "@carbon/react";

function CustomerStructuredList(){ 
    let {customers, setSelectedCustomers } = useContext(CustomerContext);

    const setSelected = (selectedIndex) => {
      console.log("CustomerStructuredList.js: setSelected() - setting index", selectedIndex)
      let s = []
      s[0] = customers.find((c) => c.id === selectedIndex)
      console.log("CustomerStructuredList.js: setSelected() - setting record:")
      console.dir(s)
      setSelectedCustomers(s)
  }

    const writeRow = (value, index) => {
      return(
    <StructuredListRow className={value.color_class} key={index}>
       <StructuredListCell onClick={() => setSelected(value.id)} noWrap>{value.customer_name}</StructuredListCell>
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
     {customers.map((value, index) => {return writeRow(value, index)})}
   </StructuredListBody>
 </StructuredListWrapper>
)}

export default CustomerStructuredList;