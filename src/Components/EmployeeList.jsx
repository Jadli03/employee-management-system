import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { employees } from '../data';

import { Button,Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


 
const roleRender = (params) => {
  return(
      params.data.role.title
  )
}

const clientRender = (params) => {
  return(
      params.data.client.name
  )
}

const EmployeeList = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
 //const accountDetails = employees.map(emp => emp.accountDetails)


 // Each Column Definition results in one Column.
//  const [columnDefs, setColumnDefs] = useState([
//    {field: 'id', filter: true},
//    {field: 'name', filter: true},
//    {field: 'email', filter: true},
//    {field: 'active', filter: true},
//    {field: 'role',cellRenderer: roleRender,  filter: true }
//  ]);

 const columnDefs = useMemo(()=> [
   {field: 'id', filter: true},
   {field: 'firstName', filter: true},
   {field: 'lastName', filter: true},
   {field: 'email', filter: true},
   {field: 'active', filter: true},
   {field: 'title',cellRenderer: roleRender,  filter: true},
   {field: 'client',  filter: true }
 ]);

 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);

 // Example load data from sever
 useEffect(() => {
  //  fetch('https://www.ag-grid.com/example-assets/row-data.json')
  //  .then(result => result.json())
  //  .then(rowData => setRowData(rowData))
        setRowData(employees)
 }, []);

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 
 return (
  <>
  <LinkContainer to='register-employee'>
  <Button className='add-emp-btn'>Add Employee</Button>
  </LinkContainer>

     <div className="ag-theme-alpine" style={{overflow: 'hidden', width: "100%", height: 600}}>
       <AgGridReact
           ref={gridRef} // Ref for accessing Grid's API
           rowData={rowData} // Row Data for Rows
           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties
           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows
           onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           pagination={true}
           paginationPageSize={12}
           />
     </div>
     </>
 );
};

export default EmployeeList;