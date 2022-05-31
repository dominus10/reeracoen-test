import { Box, Button, Checkbox, Dialog, Divider, FormGroup, FormControlLabel, TextField, Toolbar, Typography } from "@mui/material";
import { AppBarCombo } from "./AppbarCombo"
import { ChatFab } from "./ChatFab"
import { DataGrid } from '@mui/x-data-grid'
import { useState } from "react";

export const Calendar = () => {
  const [choice,setchoice] = useState('all');
  const [toggleDialog, settoggleDialog] = useState(false)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'event', headerName: 'Event', width: 170 },
    { field: 'type', headerName: 'Type', width: 170 },
    { field: 'usedBy', headerName: 'Used By', width: 170 },
    { field: 'client', headerName: 'Client', width: 170 },
  ];
  
  const rows = [
    { id: 1, date: '2022-05-16', event: 'Vesak', type:'Holiday',usedBy:'All',client:null},
    { id: 2, date: '2022-05-05', event: 'Kodomo no Hi', type:'Holiday',usedBy:'Client',client:['Sony','Daiwa','DeNA']},
    { id: 3, date: '2022-05-01', event: 'Spring Cleaning', type:'Event',usedBy:'DeNa',client:null},
  ];

  const handleDialog = ()=>{
    settoggleDialog(!toggleDialog)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Dialog onClose={handleDialog} open={toggleDialog} fullWidth maxWidth='sm'>
        <Box sx={{padding: 3}}>
          <Typography variant='h6'>Add Event/Holiday</Typography>&nbsp;
          <Divider sx={{ margin: '20px 0' }} />
          <Box sx={{display:'flex',alignItems:'center', justifyContent:'flex-start', flexDirection:{xs:'column', sm:'row',padding:'15px 0'}}}>
            <Typography variant='body1' sx={{width: 250}}>Event Name</Typography>
            <TextField variant="standard" sx={{width: 250}}></TextField>
          </Box>
          <Box sx={{display:'flex',alignItems:'center', justifyContent:'flex-start', flexDirection:{xs:'column', sm:'row',padding:'15px 0'}}}>
            <Typography variant='body1' sx={{width: 250}}>Event Date</Typography>
            <input type='date' style={{width: 250, padding: '10px 0', border: 'none', borderBottom:'1px solid grey'}}></input>
          </Box>
          <Box sx={{display:'flex',alignItems:'center', justifyContent:'flex-start', flexDirection:{xs:'column', sm:'row',padding:'15px 0'}}}>
            <Typography variant='body1' sx={{width: 250}}>Type</Typography>
            <select style={{width: 250, padding: '10px 0', border: 'none', borderBottom:'1px solid grey'}}>
              <option value="holiday">Holiday</option>
              <option value="event">Event</option>
            </select>
          </Box>
          <Box sx={{display:'flex',alignItems:'center', justifyContent:'flex-start', flexDirection:{xs:'column', sm:'row',padding:'15px 0'}}}>
            <Typography variant='body1' sx={{width: 250}}>Used By</Typography>
            <select style={{width: 250, padding: '10px 0', border: 'none', borderBottom:'1px solid grey'}} value={choice} onChange={e=>setchoice(e.target.value)}>
              <option value="all">All</option>
              <option value="internal">Internal</option>
              <option value="client">Client</option>
            </select>
          </Box>
          <Box sx={{display:choice === 'client'?'flex' : 'none',alignItems:'center', justifyContent:'flex-start', flexDirection:{xs:'column', sm:'row',padding:'15px 0'}}}>
            <Typography variant='body1' sx={{width: 250}}>Used By</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label='Sony'/>
              <FormControlLabel control={<Checkbox/>} label='Daiwa'/>
              <FormControlLabel control={<Checkbox/>} label='Nintendo'/>
              <FormControlLabel control={<Checkbox/>} label='Apple'/>
              <FormControlLabel control={<Checkbox/>} label='Google'/>
            </FormGroup>
          </Box>
          <Button variant='contained' fullWidth>Save</Button>
        </Box>
      </Dialog>
      <AppBarCombo />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, flexDirection: "column", height: {xs:'70vh', sm:'73vh'} }}>
        <Toolbar />
        <Box sx={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between', flexDirection:{xs:"column", sm:"row", md:"row"} }}>
          <Typography variant="h5">Calendar</Typography>
          <Box sx={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Button variant="contained" onClick={handleDialog}>Add Event/Holiday</Button>
          </Box>
        </Box>
        <Divider sx={{ margin: '20px 0' }} />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
      <ChatFab />
    </Box>
  )
}