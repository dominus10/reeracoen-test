import { Autocomplete, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { AppBarCombo } from "./AppbarCombo";
import { ChatFab } from "./ChatFab";
import { DataGrid } from '@mui/x-data-grid'

export const Payroll = () => {
  const autocompletes = [
    "John Dee",
    "Marie Curie",
    "Thomas Edison",
    "Uncle Roger"
  ]
  const insurance = [
    "National Helath Plan",
    "Private Insurance",
  ]
  const benefit = [
    "Full Allowance",
    "Partial Allowance",
    "Basic Allowance",
    "No Allowance"
  ]
  const columns = [
    { field: 'date', headerName: 'Day', width: 70 },
    { field: 'clockin', headerName: 'Clock In', width: 100 },
    { field: 'clockout', headerName: 'Clock Out', width: 100 },
  ];
  
  const rows = [
    { id: 1, date: 1, clockin: '09:01', clockout: '18:00',},
    { id: 2, date: 2, clockin: '09:11', clockout: '18:00',},
    { id: 3, date: 3, clockin: '09:02', clockout: '18:00',},
    { id: 4, date: 4, clockin: '09:01', clockout: '18:00',},
    { id: 5, date: 5, clockin: '09:11', clockout: '18:00',},
    { id: 6, date: 6, clockin: '09:02', clockout: '18:00',},
    { id: 7, date: 7, clockin: '09:01', clockout: '18:00',},
    { id: 8, date: 8, clockin: '09:11', clockout: '18:00',},
    { id: 9, date: 9, clockin: '09:02', clockout: '18:00',},
    { id: 10, date: 10, clockin: '09:01', clockout: '18:00',},
    { id: 11, date: 11, clockin: '09:11', clockout: '18:00',},
    { id: 12, date: 12, clockin: '09:02', clockout: '18:00',},
    { id: 13, date: 13, clockin: '09:01', clockout: '18:00',},
    { id: 14, date: 14, clockin: '09:11', clockout: '18:00',},
    { id: 15, date: 15, clockin: '09:02', clockout: '18:00',},
    { id: 16, date: 16, clockin: '09:01', clockout: '18:00',},
    { id: 17, date: 17, clockin: '09:11', clockout: '18:00',},
    { id: 18, date: 18, clockin: '09:02', clockout: '18:00',},
    { id: 19, date: 19, clockin: '09:01', clockout: '18:00',},
    { id: 20, date: 20, clockin: '09:11', clockout: '18:00',},
    { id: 21, date: 21, clockin: '09:02', clockout: '18:00',},
    { id: 22, date: 22, clockin: '09:01', clockout: '18:00',},
    { id: 23, date: 23, clockin: '09:11', clockout: '18:00',},
    { id: 24, date: 24, clockin: '09:02', clockout: '18:00',},
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCombo />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, flexDirection: "column" }}>
        <Toolbar />
        <Box sx={{display:'flex', flexDirection:"row", justifyContent:'flex-start', flexWrap:'wrap'}}>
          <Button variant='contained' sx={{width: 300, margin: 1}}>Update Profile</Button>
          <Button variant='contained' sx={{width: 300, margin: 1}}>Export Attendance</Button>
          <Button variant='contained' sx={{width: 300, margin: 1}}>Export This Month Payroll</Button>
          <Button variant='contained' sx={{width: 300, margin: 1}} color="secondary">Request Previous Month Payroll</Button>
        </Box>
        <Box sx={{display:'flex', flexDirection:"row", justifyContent:'flex-start', flexWrap:'wrap'}}>
          <Autocomplete disablePortal options={autocompletes}sx={{ width: 300, margin: 1 }} renderInput={(params) => <TextField {...params} label="Search Employee" />}/> 
          <Autocomplete disablePortal options={insurance}sx={{ width: 300, margin: 1 }} renderInput={(params) => <TextField {...params} label="Insurance" />}/> 
          <Autocomplete disablePortal options={benefit}sx={{ width: 300, margin: 1 }} renderInput={(params) => <TextField {...params} label="Benefit" />}/> 
          <TextField sx={{width: 300, margin:1}} label="Salary" />
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          <Box sx={{display:'flex', flexDirection:"column", justifyContent:'center', flexWrap:'wrap', flex:{xs:'0 0 100%', md:'0 0 50%'}}}>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
              <Typography sx={{width:250}} variant="h6">Last Month Attendances:</Typography>
              <Typography sx={{margin:2}} variant="body1">173 / 173 hrs</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
              <Typography sx={{width:250}} variant="h6">This Month Attendances:</Typography>
              <Typography sx={{margin:2}} variant="body1"> 173 / 173 hrs</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
              <Typography sx={{width:250}} variant="h6">Dayoff left:</Typography>
              <Typography sx={{margin:2}} variant="body1"> 3 days</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
              <Typography sx={{width:250}} variant="h6">Sick Days:</Typography>
              <Typography sx={{margin:2}} variant="body1"> 0 days</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', height: {xs:'40vh',sm:'60vh'}, flex:{xs:'0 0 100%', md:'0 0 50%'}, paddingBottom:7}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={31}
              rowsPerPageOptions={[10]}
            />
          </Box>
        </Box>
      </Box>
      <ChatFab />
    </Box>
  )
}