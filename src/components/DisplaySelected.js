
import {useContext} from 'react'
import {CustomerContext} from '../context/customers.context'
import '../App.css'

function DisplaySelected() {
  let {selectedCustomers, } = useContext(CustomerContext)
  if(selectedCustomers.length > 0){
  return (
  <div className={'Customer-Info'} >
   <strong>{selectedCustomers[0].customer_name}</strong> Next Check-in: <strong>06/09/2022</strong>
  </div>
  )}else{
    return (<div></div>)
  }
}
export default DisplaySelected; 