
import {useContext} from 'react'
import {StructuredListWrapper,
        StructuredListHead,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
        
      } from '@carbon/react'

import {CustomerContext} from '../context/customers.context'

function TaskList() {

  let {taskList, getSelectedCustomer} = useContext(CustomerContext)
  console.log("TaskList.js: tasks from useContaxt()")
  let myTaskList 
  const myCustomerID = getSelectedCustomer()
  if( myCustomerID >= 0){
    myTaskList = taskList.filter(value => value.customer_id === myCustomerID)
  }
  console.dir(myTaskList)


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
  if(getSelectedCustomer() >= 0)
  return (
  <div>
     

        <StructuredListWrapper isCondensed={true} selection>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Name</StructuredListCell>
              <StructuredListCell head>Type</StructuredListCell>
              <StructuredListCell head>Progress</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          {myTaskList.map((value, index) => writeTaskRow(value, index))}
          <StructuredListBody>
          </StructuredListBody>
          
       </StructuredListWrapper>
  </div>
  )
  else
    return(<div>Selected Customer: {getSelectedCustomer()}</div>)
}
export default TaskList; 