
import {Grid, Column} from '@carbon/react'
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
         <DetailPanels />
          </Column>
        </Grid>
    </div>


    )
}

export default MasterDetailPane 