import { Box, Button, Card, CardContent, Collapse, Divider, Toolbar, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { AppBarCombo } from "./AppbarCombo";
import { ChatFab } from "./ChatFab";
import { red, green, blue } from '@mui/material/colors'
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const Applicant = ()=> {
  const [newApp, setnewApp] = useState(true)
  const [inter, setinter] = useState(false)
  const [offer, setoffer] = useState(false)
  const applicants =[
    {name:'Leeroy Jenkins',position:'Frontend Engineer', date:'2022-05-28', source:'LinkedIn'},
    {name:'Gabe Newell',position:'Frontend Engineer', date:'2022-05-02', source:'LinkedIn'},
    {name:'Dan Abramovich',position:'Backend Engineer', date:'2022-04-25', source:'Glints'},
    {name:'Matsumoto Yukihiro',position:'Fullstack Engineer', date:'2022-05-15', source:'Snaphunt'},
    {name:'Dr. Strange',position:'Mobile Developer', date:'2022-05-11', source:'internal'},
  ]
  const positionSwitcher = (args)=>{
    switch(true){
      case args.split(' ')[0] === 'Frontend': return 'primary'
      case args.split(' ')[0] === 'Backend': return 'secondary'
      case args.split(' ')[0] === 'Fullstack': return red[600]
      case args.split(' ')[0] === 'Mobile': return green[600]
      default: return 'text.secondary'
    }
  }
  const handleCollapse = {
    new: ()=>{
      setnewApp(true)
      setinter(false)
      setoffer(false)
    },
    inter: ()=>{
      setnewApp(false)
      setinter(true)
      setoffer(false)
    },
    offer: ()=>{
      setnewApp(false)
      setinter(false)
      setoffer(true)
    },
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCombo/>
      <Box component="main" sx={{ flexGrow: 1, padding: 3,flexDirection: "column" }}>
        <Toolbar/>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Typography variant="h5">Applicant</Typography>
          <Button variant="contained">Add applicant manually</Button>
        </Box>
        <Box sx={{width:20, height: 20}}></Box>
        <Box sx={{display:'flex', justifyContent:'space-between'}}><Button onClick={handleCollapse.new} fullWidth><Typography variant="h6">New Application</Typography>{newApp ? <ExpandLess/> : <ExpandMore/>}</Button></Box>
        <Collapse in={newApp}>
          <Box sx={{display:'flex',flexDirection:{xs:"column", sm:"row", md:"row"}}}>
            {applicants.map((e,i)=>{
              return <Fragment key={i}>
                <Card sx={{width: {xs:'100%', md:'50%'}}}>
                  <CardContent>
                    <Typography variant='h6'>{e.name}</Typography>
                    <Typography variant='body1' color={positionSwitcher(e.position)}>{e.position}</Typography>
                    <Typography variant='body2'>{e.date}</Typography>
                    <Typography variant='body2' color="text.secondary" sx={{background: e.source==='internal'? red[200]: blue[100]}}>{e.source}</Typography>
                  </CardContent>
                </Card>
                <Box sx={{width:20, height: 20}}></Box>
              </Fragment>
            })}
          </Box>
        </Collapse>
        <Divider sx={{margin:'20px 0'}}/>
        <Box sx={{display:'flex', justifyContent:'space-between'}}><Button onClick={handleCollapse.inter} fullWidth><Typography variant="h6">Interviewed</Typography>{inter ? <ExpandLess/> : <ExpandMore/>}</Button></Box>
        <Collapse in={inter}>
          <Box sx={{display:'flex',flexDirection:{xs:"column", sm:"row", md:"row"}}}>
            {applicants.map((e,i)=>{
              return <Fragment key={i}>
                <Card sx={{width: {xs:'100%', md:'50%'}}}>
                  <CardContent>
                    <Typography variant='h6'>{e.name}</Typography>
                    <Typography variant='body1' color={positionSwitcher(e.position)}>{e.position}</Typography>
                  </CardContent>
                </Card>
                <Box sx={{width:20, height: 20}}></Box>
              </Fragment>
            })}
          </Box>
        </Collapse>
        <Divider sx={{margin:'20px 0'}}/>
        <Box sx={{display:'flex', justifyContent:'space-between'}}><Button onClick={handleCollapse.offer} fullWidth><Typography variant="h6">Offer</Typography>{offer ? <ExpandLess/> : <ExpandMore/>}</Button></Box>
        <Collapse in={offer}>
          <Box sx={{display:'flex',flexDirection:{xs:"column", sm:"row", md:"row"}}}>
            {applicants.map((e,i)=>{
              return <Fragment key={i}>
                <Card sx={{width: {xs:'100%', md:'50%'}}}>
                  <CardContent>
                    <Typography variant='h6'>{e.name}</Typography>
                    <Typography variant='body1' color={positionSwitcher(e.position)}>{e.position}</Typography>
                  </CardContent>
                </Card>
                <Box sx={{width:20, height: 20}}></Box>
              </Fragment>
            })}
          </Box>
        </Collapse>
        </Box>
      <ChatFab/>
    </Box>
  )
}