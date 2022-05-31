import { ChatBubble } from "@mui/icons-material"
import { Fab } from "@mui/material"

export const ChatFab = ()=>{
  return(
    <Fab
      color='primary'
      sx={{
        position: 'fixed',
        bottom: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2),
      }}
    >
      <ChatBubble/>
    </Fab>
  )
}