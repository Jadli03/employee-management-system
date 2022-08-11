import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';



export default function CreateEmployee({open,handleClose,data, onChange, handleSubmit}) {
  
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Employee</DialogTitle>
        <DialogContent>
          <form>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="id"
            name="id"
            label="Employee Id"
            fullWidth
            variant="standard"
            value={data.id}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            variant="standard"
            value={data.firstName}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            variant="standard"
            value={data.lastName}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={data.email}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="panNumber"
            name="panNumber"
            label="Pan Number"
            fullWidth
            variant="standard"
            value={data.panNumber}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="standard"
            value={data.city}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="state"
            fullWidth
            variant="standard"
            value={data.state}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pinCode"
            name="pinCode"
            label="Zip / Postal code"
            fullWidth
            variant="standard"
            value={data.pinCode}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            value={data.country}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="roleName"
            name="roleName"
            label="Role"
            fullWidth
            variant="standard"
            value={data.roleName}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="manager"
            name="manager"
            label="Manager"
            fullWidth
            variant="standard"
            value={data.manager}
            onChange={e=>onChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="clientName"
            name="clientName"
            label="Client"
            fullWidth
            variant="standard"
            value={data.clientName}
            onChange={e=>onChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="clientManager"
            name="clientManager"
            label="Client Manager"
            fullWidth
            variant="standard"
            value={data.clientManager}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="accountNumber"
            name="accountNumber"
            label="Account Number"
            fullWidth
            variant="standard"
            value={data.accountNumber}
            onChange={e=>onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bankName"
            name="bankName"
            label="Bank Name"
            fullWidth
            variant="standard"
            value={data.bankName}
            onChange={e=>onChange(e)}
          />
        </Grid>
      </Grid>
      </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">Cancel</Button>
          <Button  color="primary" onClick={()=>handleSubmit()} variant="contained" >Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
