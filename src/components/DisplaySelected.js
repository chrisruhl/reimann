
import {useContext} from 'react'
import {CustomerContext} from '../context/customers.context'
import '../App.css'

function DisplaySelected() {

    let {custList, } = useContext(CustomerContext)

    const getSelectedName = (custList) => {
        let m = custList.selected >= 0 ? custList.theList[custList.selected]['customer_name'] : 'None';
       return(<span>{m}</span>)
    }
  if(custList.selected >= 0){
  return (
  <div className={'Customer-Info'} ><h4>
   <strong>{getSelectedName(custList)}</strong> - Last Check-in: <strong>05/09/2022</strong> - Next Check-in: <strong>06/09/2022</strong>
  </h4></div>
  )}else{
    return (<div></div>)
  }
}
export default DisplaySelected; 