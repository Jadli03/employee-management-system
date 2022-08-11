import React, {useState, useMemo, useEffect} from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CreateEmployee from './CreateEmployee';

const Employee = () => {
    const url ="http://localhost:4000/employees";
    const [gridApi, setGridApi] = useState(null)
    const [rowData, setRowData] = useState(null);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        panNumber: "",
        manager: "",
            city: "",
            state: "",
            pinCode: "",
            country: "",
            roleName: "",
            clientName: "",
            clientManager: "",
            accountNumber: "",
            bankName: "",
    })

    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const columnDefs = useMemo(()=> [
        {headerName: "Employee Id", field: 'id'},
        {headerName: "First Name", field: 'firstName'},
        {headerName: "Last Name", field: 'lastName'},
        {headerName: "Email", field: 'email'},
        {headerName: "Active", field: 'active'},
        {headerName: "Wissen Manager", field: 'manager'}
      ]);

      useEffect(()=>{
        getEmployees()
      },[])

      const onChange = (e) => {
        const {value, id} = e.target
        setFormData({...formData, [id]:value})
      }

      const getEmployees = () => {
        fetch(url)
        .then(res => res.json())
        .then(res => setRowData(res))
      }

      const onGridReady = (params) => {
        setGridApi(params);
      }

      const handleSubmit = () => {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            'content-type': 'Application/json'
          }
        })
        .then(res => res.json())
        .then(res => getEmployees());
      }
      
      const defaultColDef = useMemo( ()=> ({
        sortable: true,
        flex:1,
        filter: true,
        floatingFilter: true,
        resizable:true,
        suppressSizeToFit: true
      }));
    
  return (
    <>
    <Button onClick={handleClickOpen} style={{margin:'10px'}} variant="contained">
        <AddIcon />
        add
    </Button>
        <div className="ag-theme-alpine" style={{height:'600px'}}>
        <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection='multiple' // Options - allows click selection of rows
        pagination={true}
        paginationPageSize={12}
        />
        </div>
        <CreateEmployee 
        open={open} 
        handleClose={handleClose} 
        data={formData}
       onChange={onChange} 
       handleSubmit={handleSubmit}
         />
    </>
  )
}

export default Employee