/*
https://react.carbondesignsystem.com/?path=/story/components-datatable-selection--with-radio-selection
*/

import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableSelectRow,
    TableContainer
  } from '@carbon/react';

  import allData  from '../data/devData.json'

  let devTopHeaders = allData['customer_headers'];
  let devTopRows    = allData['customers'];
  
  // vuetify data tables use "text"/"value" for match
  // carbon react uses "key"/"header" for match 
  devTopHeaders = devTopHeaders.reduce( (p,c) => { 
    let r = null;
    if(c['value'] === 'id') 
    { r = p}
    else{
    r = p.concat({'key':c['value'], 'header':c['text']})}
    return r}, [])

  // Table Row wants a string as the cell id... we have an int from Mockaroo
  devTopRows = devTopRows.reduce( (p,c) => { return p.concat({...c, 'id': c['id'].toString()})}, [])
  

function TopRecords(){

     

    return (
      
      <DataTable headers={devTopHeaders} rows={devTopRows}  useZebraStyles radio>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getTableProps,
        getTableContainerProps,
      }) => (
        <TableContainer
          {...getTableContainerProps()}>
          <Table {...getTableProps()}>
            <TableHead>
            <TableRow>
              <th scope="col" />
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
                  <TableSelectRow
                    {...getSelectionProps({ row })}
                  />
                  {row.cells.map((cell) => {
                    return (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  )})}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
      )
}

export {TopRecords}