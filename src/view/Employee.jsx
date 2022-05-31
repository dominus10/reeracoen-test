import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import { AppBarCombo } from "./AppbarCombo"
import { ChatFab } from "./ChatFab"
import { DataGrid } from '@mui/x-data-grid'

export const Employee = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'firstName', headerName: 'First name', width: 170 },
    { field: 'lastName', headerName: 'Last name', width: 170 },
    { field: 'position', headerName: 'Position', width: 170 },
    { field: 'division', headerName: 'Division', width: 170 },
    { field: 'placement', headerName: 'Placement', width: 170 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', division:'HR', position:'Recruiter',placement:'Internal' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', division:'HR', position:'Bizdev',placement:'Internal' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', division:'HR', position:'Bizdev',placement:'Internal' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', division:'Developer', position:'Frontend Developer',placement:'Internal' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', division:'Developer', position:'Frontend Developer',placement:'Internal' },
    { id: 6, lastName: 'Melisandre', firstName: 'Claire', division:'Developer', position:'Backend Developer',placement:'Internal' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', division:'', position:'Fullstack Developer',placement:'Client' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', division:'', position:'Mobile Developer',placement:'Client' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', division:'', position:'Java Developer',placement:'Client' },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCombo />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, flexDirection: "column", height: '75vh' }}>
        <Toolbar/>
        <Box sx={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
          <Typography variant="h5">Employee</Typography>
          <Button variant="contained">Add Employee</Button>
        </Box>
        <Divider sx={{margin:'20px 0'}}/>
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