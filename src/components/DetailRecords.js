import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableContainer
  } from 'carbon-components-react';

  import allData  from '../data/devData.json'
import { DateUpdate } from './DateUpdate';

  import DateUpdateAbs from './DateUpdateAbs'

  let selectedCustomerID = 18;
  let devDetailHeaders = allData['task_headers'];
  let devDetailRows    = allData['tasks'].filter((e) => (e['customer_id'] === selectedCustomerID));

  // vuetify data tables use "text"/"value" for match
  // carbon react uses "key"/"header" for match 
  devDetailHeaders = devDetailHeaders.reduce( (p,c) => { 
    let r = null;
    if(c['value'] === 'id') 
    { r = p}
    else{
    r = p.concat({'key':c['value'], 'header':c['text']})}
    return r}, [])

  // Table Row wants a string as the cell id... we have an int from Mockaroo
  devDetailRows = devDetailRows.reduce( (p,c) => { return p.concat({...c, 'id': c['id'].toString()})}, [])

  
  const MyDatePicker = (props) => {
        let ret = "hello.";
         
        if(props.cellinfo.split(":")[1] === "target_date"){
            ret = <input onChange={(e) => {this.value=e.target.value}} value={props.value.substring(0,10)} type="date" /> 
        }
        return(ret)
      
  }


function DetailRecords(){

    return (
        <div>

      <DataTable headers={devDetailHeaders} rows={devDetailRows} size="sm" useZebraStyles>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getTableContainerProps,
      }) => (
        <TableContainer
          {...getTableContainerProps()}>
          <Table {...getTableProps()}>
            <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableHeader key={i} {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  {...getRowProps({ row })}
                  >
                  {row.cells.map((cell) => {
                    return (
                    <TableCell key={cell.id}><DateUpdateAbs myRow={row} value={cell.value} cellinfo={cell.id}/></TableCell>
                  )})}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
    </div>
      )
}

export {DetailRecords}