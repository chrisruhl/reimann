
import {useContext} from 'react'
import {Tab, Tabs, TabList, TabPanel, TabPanels, } from '@carbon/react'
import {CustomerContext} from '../context/customers.context'
import TaskList from './TaskList'

function CustomerList(props) {

  let {custList, } = useContext(CustomerContext)
  console.log("CustomerList.js: customers from useContext()")
  console.dir(custList)
  const getSelectedName = (custList) => {
    let m = custList.selected >= 0 ? custList.theList[custList.selected]['customer_name'] : 'None';
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
                <TabPanel> Details for: {getSelectedName(custList)} </TabPanel>
                <TabPanel> Contacts for: {getSelectedName(custList)} </TabPanel>
                <TabPanel>
                    <TaskList />
                </TabPanel>
                <TabPanel> Situation Alert for: {getSelectedName(custList)} </TabPanel>
                <TabPanel> Flashes for: {getSelectedName(custList)} </TabPanel>
                <TabPanel> CSP Cases for: {getSelectedName(custList)} </TabPanel>
                <TabPanel> Environment for:{getSelectedName(custList)}  </TabPanel>
                
              </TabPanels>
          </Tabs>
  );
}
export default CustomerList; 