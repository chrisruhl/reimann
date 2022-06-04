import { DatePicker, DatePickerInput, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';


function SListInput() {
  const handleDateChange = (e) => { console.log("Handling: ", e) };
  return (
    <StructuredListWrapper isCondensed>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>ColumnA</StructuredListCell>
          <StructuredListCell head>ColumnB</StructuredListCell>
          <StructuredListCell head>ColumnC</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell noWrap>Row 1</StructuredListCell>
          <StructuredListCell>Row 1</StructuredListCell>
          <StructuredListCell>

          </StructuredListCell>
        </StructuredListRow>
        <StructuredListRow style={{ background: "#ffedd9" }}>
          <StructuredListCell noWrap>Row 2</StructuredListCell>
          <StructuredListCell><DatePicker style={{ background: "#ffedd9" }} value="12/30/2022" onChange={(e) => handleDateChange(e)}
            datePickerType="single" >
            <DatePickerInput short='true'
              placeholder="dd/mm/yyyy"
              id="date-picker-8"
              labelText=""

            />
          </DatePicker></StructuredListCell>
          <StructuredListCell>
            <DatePicker value="12/30/2022" onChange={(e) => handleDateChange(e)}
              datePickerType="single" >
              <DatePickerInput
                placeholder="dd/mm/yyyy"
                id="date-picker-8"
                labelText=""

              />
            </DatePicker>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>);
}

export default SListInput