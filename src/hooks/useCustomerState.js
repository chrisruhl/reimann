import {useState} from "react";
import {dataSet} from "../data/dataSet"

// const initialCustomers = {selected: null, theList: [{id:0, name: 'c0'},{id:1, name:'c1'}]}
const initialCustomers = dataSet['customers'];
const initialTasks     = dataSet['tasks']
const initialContacts  = dataSet['contacts']

const useCustomerState = () => {
   const [custList, setCustomers] = useState(initialCustomers);
   const [taskList, setTasks] = useState(initialTasks);
   const [contactList, setContacts] = useState(initialContacts);
   const getSelectedCustomer = () => {return custList.selected;}

   return {custList, setCustomers, taskList, setTasks, contactList, setContacts, getSelectedCustomer}
}

export default useCustomerState;