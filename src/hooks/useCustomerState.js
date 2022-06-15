import {useState} from "react";
import {dataSet} from "../data/dataSet"

const initialCustomers    = dataSet['customers'];
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
for( let i = 0; i < initialCustomers.length; i++){
  let myPriority = getRandomPriority();
  initialCustomers[i]['priority'] = myPriority;
  initialCustomers[i]['color_class'] = getColorClass(myPriority)

} 
initialCustomers.sort((a,b) => b.priority - a.priority || a.customer_name.localeCompare(b.customer_name))
console.log("Customers Sorted!")
const noop = () => {};  
for( let i = 0; i < initialCustomers.length; i++){
  noop()
} 
console.log("Customers Initialized")
console.dir(initialCustomers)

const useCustomerState = () => {
   const [customers, setCustomers] = useState(initialCustomers);
   const [selectedCustomers, setSelectedCustomers] = useState([])
   
   const [tasks, setTasks] = useState(initialTasks);
   const [selectedTasks, setSelectedTasks] = useState([]);
   
   const [contacts, setContacts] = useState(initialContacts);
   const [selecteContacts, setSelectedContacts] = useState([]);

   return {
     customers, setCustomers,
     selectedCustomers, setSelectedCustomers,
     
     tasks, setTasks,
     selectedTasks, setSelectedTasks,
     
     contacts, setContacts,
     selecteContacts, setSelectedContacts
    }
}

export default useCustomerState;