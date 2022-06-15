
import {Grid, Column, IconButton} from '@carbon/react'
import {AddAlt} from '@carbon/icons-react'
import CustomerStructuredList from './CustomerStructuredList'
import DetailPanels from './DetailPanels'

function MasterDetailPane(){
    return(
        <div>
        <Grid>
          <Column lg={3}>
            <CustomerStructuredList />
          </Column>
          <Column lg={9}>
            <div div style={{ marginTop: '3px' }}><IconButton size={'sm'} label="New Task">
                      <AddAlt />
                    </IconButton></div>
         <DetailPanels />
          </Column>
        </Grid>
    </div>


    )
}

export default MasterDetailPane 