
import {useContext} from 'react'
import {Tab, Tabs, TabList, TabPanel, TabPanels, IconButton} from '@carbon/react'
import {AddAlt} from '@carbon/icons-react'
import {CustomerContext} from '../context/customers.context'
import TaskList from './TaskList'

function CustomerList(props) {

  let {selectedCustomers } = useContext(CustomerContext)

  const getSelectedName = () => {
    let m 
    if (selectedCustomers.length > 0)
      m = selectedCustomers[0]['customer_name']
    else
      m = 'None';
    return(<span>{m}</span>)
  }

  return (
            <Tabs>
              <TabList aria-label="List of tabs">
                <Tab>Details</Tab>
                <Tab>Contacts</Tab>
                <Tab>Tasks</Tab>
                <Tab>Situation Alert</Tab>
                <Tab>Flashes</Tab>
                <Tab>CSP Cases</Tab>
                <Tab>Environment</Tab>
                
              </TabList>
              <TabPanels>
                <TabPanel> Details for: {getSelectedName()} </TabPanel>
                <TabPanel> Contacts for: {getSelectedName()} </TabPanel>
                <TabPanel>    
                    <TaskList />
                </TabPanel>
                <TabPanel> Situation Alert for: {getSelectedName()} </TabPanel>
                <TabPanel> Flashes for: {getSelectedName()} </TabPanel>
                <TabPanel> CSP Cases for: {getSelectedName()} </TabPanel>
                <TabPanel> Environment for:{getSelectedName()}  </TabPanel>
                
              </TabPanels>
          </Tabs>
  );
}
export default CustomerList; 