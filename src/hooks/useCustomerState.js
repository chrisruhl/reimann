import {useState} from "react";
import {dataSet} from "../data/dataSet"


// const initialCustomers = {selected: null, theList: [{id:0, name: 'c0'},{id:1, name:'c1'}]}
let customers           = dataSet['customers'];
let initialCustomers    = {selected: -1, theList: customers}
const initialTasks        = dataSet['tasks']
const initialContacts     = dataSet['contacts']

const getRandomPriority = () => { return 10 * getRandomArbitrary(0,3) }


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getColorClass = (priority) => {
      if(priority === 10) return 'task-priority-two'
      if(priority === 20) return 'task-priority-one'
      return ''
    }
var today = new Date(Date.now()) 
initialTasks.forEach( (c,i) => {c.target_date = addDays(today, getRandomArbitrary(-30,60))})
for( let i = 0; i < initialCustomers.theList.length; i++){
  let myPriority = getRandomPriority();
  initialCustomers.theList[i]['priority'] = myPriority;
  initialCustomers.theList[i]['color_class'] = getColorClass(myPriority)
  //initialCustomers.theList[i]['customer_name'] = initialCustomers.theList[i]['customer_name'] + " - " + myPriority + " - " + getColorClass(myPriority)
  console.log(initialCustomers.theList[i]['customer_name'])
} 
initialCustomers.theList.sort((a,b) => b.priority - a.priority || a.customer_name.localeCompare(b.customer_name))
console.log("Customers Sorted!")
for( let i = 0; i < initialCustomers.theList.length; i++){
  console.log(initialCustomers.theList[i]['customer_name'])
} 
console.log("Customers Initialized")
console.dir(initialCustomers.theList)

const useCustomerState = () => {
   const [custList, setCustomers] = useState(initialCustomers);
   const [taskList, setTasks] = useState(initialTasks);
   const [contactList, setContacts] = useState(initialContacts);
   const getSelectedCustomer = () => {return custList.selected;}

   return {custList, setCustomers, taskList, setTasks, contactList, setContacts, getSelectedCustomer}
}

export default useCustomerState;