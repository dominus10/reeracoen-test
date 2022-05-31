import { AccountCircle, AttachMoney, CalendarMonth, ChevronLeft, Dashboard, Hail, Menu as MenuIcon, MoreVert, Notifications, People } from "@mui/icons-material";
import { AppBar, Badge, Button, IconButton, Drawer, Toolbar, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'

export const AppBarCombo = () =>{
  const [openDrawer, setOpenDrawer] = useState(false)
  const drawerWidth = 230
  const location = useLocation()
  const handleDrawer = {
    open: ()=>{setOpenDrawer(true)},
    close: ()=>{setOpenDrawer(false)},
  }
  return (
    <div>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , background:'white'}}>
        <Toolbar>
          <Box><IconButton onClick={openDrawer ? handleDrawer.close : handleDrawer.open} sx={{color:'darkgrey'}}>{openDrawer ? <ChevronLeft/> : <MenuIcon/>}</IconButton></Box>
          <Box sx={{flexGrow:1}}>
            <Typography variant="body1" color="text.primary" sx={{paddingLeft: 2}}>{new Date(2022,4,29).toLocaleString('default', { year: 'numeric',month: 'long', day:'numeric' })}</Typography>
          </Box>
          <Box sx={{ display: {xs: 'none',sm:'flex',  md: 'flex'}}}>
            <IconButton sx={{color:'darkgrey', margin: '0 10px'}}>
              <Badge badgeContent={10} color="error">
                <Notifications/>
              </Badge>
            </IconButton>
            <IconButton sx={{color:'darkgrey', margin: '0 10px'}}>
              <AccountCircle/>
            </IconButton>
          </Box>
          <Box sx={{ display: {xs: 'flex',sm:'none',  md: 'none'}}}>
            <IconButton sx={{color:'darkgrey', margin: '0 10px'}}>
              <Badge badgeContent={10} color="error">
                <MoreVert />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left" 
        onClose={handleDrawer.close} 
        variant="permanent"
        sx={{
          width: openDrawer ? drawerWidth : 76,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: openDrawer ? drawerWidth : 76, boxSizing: 'border-box' },
        }}
        >
          <Toolbar/>
          <Box className="flex-d flex-left" style={{marginTop: 10, marginLeft: 5, marginRight: 5, overflow: 'auto'}}>
            {['Dashboard','Applicant','Employee','Calendar','Payroll & Benefit','Talent Management'].map((ele,i)=>{
              switch(true){
                case i===0: return <Link key={i} to="/home"><Button className="drawer-button" variant={location.pathname==='/home'?"outlined":'text'}><Dashboard sx={{marginRight: 1}}/><Typography variant='span'>{openDrawer ? ele: null}</Typography></Button></Link>
                case i===1: return <Link key={i} to="/applicant"><Button className="drawer-button" variant={location.pathname==='/applicant'?"outlined":'text'}><Hail sx={{marginRight: 1}}/><Typography variant='span'>{openDrawer ? ele: null}</Typography></Button></Link>
                case i===3: return <Link key={i} to="/calendar"><Button className="drawer-button" variant={location.pathname==='/calendar'?"outlined":'text'}><CalendarMonth sx={{marginRight: 1}}/><Typography variant='span'>{openDrawer ? ele: null}</Typography></Button></Link>
                case i===2: return <Link key={i} to="/employee"><Button className="drawer-button" variant={location.pathname==='/employee'?"outlined":'text'}><People sx={{marginRight: 1}}/><Typography variant='span'>{openDrawer ? ele: null}</Typography></Button></Link>
                case i===4: return <Link key={i} to="/payroll"><Button className="drawer-button" variant={location.pathname==='/payroll'?"outlined":'text'}><AttachMoney sx={{marginRight: 1}}/><Typography variant='span'>{openDrawer ? ele: null}</Typography></Button></Link>
                default: return null
              }
            })}
          </Box>
      </Drawer>
    </div>
  )
}