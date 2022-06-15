
import {useContext} from 'react'
import {StructuredListWrapper,
        StructuredListHead,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
        
      } from '@carbon/react'

import {CustomerContext} from '../context/customers.context'

function TaskList() {

  
  let myTaskList = []
  let myCustomerID = []
  let {tasks, selectedCustomers} = useContext(CustomerContext)

  console.log("TaskList.js: TaskList(): getting started with " + selectedCustomers.length + " selected customers")
  if(selectedCustomers.length > 0){
    myCustomerID = selectedCustomers[0].id
    myTaskList = tasks.filter(value => value.customer_id === myCustomerID)
  }

  // Write One Row ( called in map function below)
  const writeTaskRow = (theTask, index) => {
    if(myTaskList)
    return(
      <StructuredListRow key={index}>
        <StructuredListCell noWrap>{theTask.task_name}</StructuredListCell>
        <StructuredListCell noWrap>{theTask.type}</StructuredListCell>
        <StructuredListCell noWrap>{theTask.progress}</StructuredListCell>
      </StructuredListRow>
     )
  }

  // This gets returned every time - structured list Wrapper + body
  return (
        <StructuredListWrapper isCondensed={true} selection>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>Name</StructuredListCell>
            <StructuredListCell head>Type</StructuredListCell>
            <StructuredListCell head>Progress</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {myTaskList.map((value, index) => writeTaskRow(value, index))}
        </StructuredListBody>          
      </StructuredListWrapper>
  )
  
}
export default TaskList; 