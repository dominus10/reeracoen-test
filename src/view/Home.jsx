import { Box, Button, Card, CardContent, Toolbar, Typography } from "@mui/material"
import { Fragment } from "react"
import {AppBarCombo} from "./AppbarCombo"
import { ChatFab } from "./ChatFab"

export const Home = ()=> {
  const tasks = [
    'Update Status','Update Insurance Number','Report New Applicant (if any)'
  ]
  const applicants = [
    'Leeroy Jenkins',
    'Gabe Newell',
    'Dan Abramovich',
    'Matsumoto Yukihiro',
    'Dr. Strange'
  ]
  const events = [
    '1 May - Spring Cleaning',
    '10 May - Team Gathering',
    '16 May - Vesak Holiday',
  ]
  const greetings = ()=>{
    const hrs = new Date().getHours()
    if(hrs >= 0 && hrs <= 11){
      return 'Morning'
    }else if(hrs >= 12 && hrs <= 17){
      return 'Afternoon'
    }else{
      return 'Evening'
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCombo/>
      <Box component="main" sx={{ flexGrow: 1, padding: 3,flexDirection: "column" }}>
        <Toolbar/>
        <Box sx={{display:'flex', width:'100%',flexDirection:{xs:"column", sm:"row", md:"row"}}}>
          <Typography variant="h3">Good {greetings()} Nicholas!</Typography>
        </Box>
        <Box sx={{display:'flex', width:'100%',flexDirection:{xs:"column", sm:"row", md:"row"},flexWrap:'wrap'}}>
          <Button variant='contained' sx={{width: 250, margin: 1}}>Request Timeoff</Button>
          <Button variant='contained' sx={{width: 250, margin: 1}}>Request Reimbursement</Button>
          <Button variant='contained' sx={{width: 250, margin: 1}}>Submit Attendance</Button>
          <Button variant='contained' sx={{width: 250, margin: 1}}>Update Profile</Button>
          <Button variant='contained' sx={{width: 250, margin: 1}}>Export Attendance</Button>
        </Box>
        <Box sx={{width:20, height: 20}}></Box>
        <Box sx={{display:'flex',flexDirection:{xs:"column", sm:"row", md:"row"}}}>
          <Card sx={{width: {xs:'100%', md:'50%'}}}>
            <CardContent>
              <Typography variant="h5">Today Checklist/ Todos</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {tasks.map((e,i)=>{
                  return <Fragment key={i}>・{e}<br/></Fragment>
                })}
              </Typography>
            </CardContent>
          </Card>
          <Box sx={{width:20, height: 20}}></Box>
          <Card sx={{width: {xs:'100%', md:'50%'}}}>
            <CardContent>
              <Typography variant="h5">New Applicants</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {applicants.map((e,i)=>{
                  return <Fragment key={i}>・{e}<br/></Fragment>
                })}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{width:20, height: 20}}></Box>
        <Box sx={{display:'flex'}}>
          <Card sx={{width: '100%'}}>
            <CardContent>
              <Typography variant="h5">{new Date(2022,4).toLocaleString('default', { month: 'long' })}&nbsp;{new Date().getFullYear()}&nbsp;Event</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {events.map((e,i)=>{
                  return <Fragment key={i}>・{e}<br/></Fragment>
                })}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <ChatFab/>
    </Box>
  )
}